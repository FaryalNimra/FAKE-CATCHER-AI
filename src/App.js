import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Layout/Base.jsx";
import Home from "./Pages/Home";
import Product from "./Pages/Product.jsx";
import Contact from "./Pages/Contact.jsx";
import Support from "./Pages/Support.jsx";
import Policy from "./Pages/Policy.jsx";
import Pricing from "./Pages/Pricing.jsx";
import About from "./Pages/About.jsx";
import CheapFake from "./Pages/CheapFake.jsx";
import ScrollToTop from "./components/Elements/ScrollToTop"; // ✅ Import ScrollToTop
import Team from "./Pages/Team.jsx";
import Datasets from "./Pages/Datasets.jsx";
import Sign from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Forgot from "./Pages/ForgotPassword.jsx";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ Scroll to top on route change */}
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/CheapFake" element={<CheapFake />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/SignIn" element={<Sign />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<Forgot />} />


          <Route path="/Datasets" element={<Datasets />} />




        </Routes>
      </Base>
    </BrowserRouter>
  );
}

export default App;
