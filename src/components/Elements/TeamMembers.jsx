import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // Social icons
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeamMembers.scss"; // Custom styles

const teamData = [
  {
    id: 1,
    name: "Mike Cannon-Brookes",
    role: "AI Analyst",
    image: "/Assests/n.png",
    bgColor: " #e0f7fa",
    facebook: "https://www.facebook.com/profile.php?id=61574791244051",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Scott Farquhar",
    role: "AI Analyst",
    image: "/Assests/n.png",
    bgColor: " #e0f7fa",
    facebook: "https://www.facebook.com/profile.php?id=61574791244051",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Anu Bharadwaj",
    role: "AI Analyst",
    image: "/Assests/n.png",
    bgColor: " #e0f7fa", 
    facebook: "https://www.facebook.com/profile.php?id=61574791244051",
    linkedin: "#",
  },
];

const TeamMembers = () => {
  return (
    <div className="team-container container-fluid">
      <h2 className="team-title text-center">Meet Our Leadership</h2>
      <div className="row justify-content-center">
        {teamData.map((member) => (
          <div key={member.id} className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
            <div
              className="team-member text-center"
              style={{ backgroundColor: member.bgColor }}
            >
              <div className="team-img-wrapper">
                <img src={member.image} alt={member.name} className="team-img" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-socials">
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
