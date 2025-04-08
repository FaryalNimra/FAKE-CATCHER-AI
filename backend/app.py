from flask import Flask, request, jsonify, render_template, url_for
from flask_cors import CORS  # Import CORS
import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
from huggingface_hub import hf_hub_download  # Make sure this import is included
import os
from mtcnn import MTCNN  
import cv2

app = Flask(__name__, template_folder="templates", static_folder="static")
CORS(app)  # Enable CORS for the Flask app

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
UPLOAD_FOLDER = "static/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load Model Function
def load_model_from_hf(repo_id, filename, num_classes):
    model_path = hf_hub_download(repo_id=repo_id, filename=filename)
    model = models.convnext_tiny(weights=None)
    in_features = model.classifier[2].in_features
    model.classifier[2] = nn.Linear(in_features, num_classes)
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.to(device)
    model.eval()
    return model

# Load Models
deepfake_model = load_model_from_hf("faryalnimra/DFDC-detection-model", "DFDC.pth", 2)  
cheapfake_model = load_model_from_hf("faryalnimra/ORIG-TAMP", "ORIG-TAMP.pth", 1)
realfake_model = load_model_from_hf("faryalnimra/RealFake", "real_fake.pth", 1)  # New model added (only loaded, not used)

# Image Preprocessing
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

face_detector = MTCNN()

def detect_face(image_path):
    image = cv2.imread(image_path)
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    faces = face_detector.detect_faces(image_rgb)
    face_count = sum(1 for face in faces if face.get("confidence", 0) > 0.90 and face.get("box", [0, 0, 0, 0])[2] > 30)
    return face_count

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files["file"]
    filename = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filename)

    try:
        image = Image.open(filename).convert("RGB")
        image_tensor = transform(image).unsqueeze(0).to(device)
    except Exception as e:
        return jsonify({"error": "Error processing image", "details": str(e)}), 500

    with torch.no_grad():
        deepfake_probs = torch.softmax(deepfake_model(image_tensor), dim=1)[0]
        deepfake_confidence_before = deepfake_probs[1].item() * 100  
        cheapfake_confidence_before = torch.sigmoid(cheapfake_model(image_tensor)).item() * 100  

    face_count = detect_face(filename)
    face_factor = min(face_count / 2, 1)  

    if deepfake_confidence_before <= cheapfake_confidence_before:
        adjusted_deepfake_confidence = deepfake_confidence_before * (1 + 0.3 * face_factor)
        adjusted_cheapfake_confidence = cheapfake_confidence_before * (1 - 0.3 * face_factor)
    else:
        adjusted_deepfake_confidence = deepfake_confidence_before
        adjusted_cheapfake_confidence = cheapfake_confidence_before

    fake_type = "Deepfake" if adjusted_deepfake_confidence > adjusted_cheapfake_confidence else "Cheapfake"
    # Print the result to the terminal
    print(f"Prediction: Fake")
    print(f"Fake Type: {fake_type}")
    print(f"Deepfake Confidence Before: {deepfake_confidence_before:.2f}%")
    print(f"Deepfake Confidence Adjusted: {adjusted_deepfake_confidence:.2f}%")
    print(f"Cheapfake Confidence Before: {cheapfake_confidence_before:.2f}%")
    print(f"Cheapfake Confidence Adjusted: {adjusted_cheapfake_confidence:.2f}%")
    print(f"Faces Detected: {face_count}")
    print(f"Image URL: {url_for('static', filename=f'uploads/{file.filename}')}")

    return jsonify({
        "prediction": "Fake",
        "fake_type": fake_type,
        "deepfake_confidence_before": f"{deepfake_confidence_before:.2f}%",
        "deepfake_confidence_adjusted": f"{adjusted_deepfake_confidence:.2f}%",
        "cheapfake_confidence_before": f"{cheapfake_confidence_before:.2f}%",
        "cheapfake_confidence_adjusted": f"{adjusted_cheapfake_confidence:.2f}%",
        "faces_detected": face_count,
        "image_url": url_for("static", filename=f"uploads/{file.filename}")
    })

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
