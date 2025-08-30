import React from "react";
import "./Biopage.css";
import profile from "./profile.jpg";

function BioPage() {
  return (
    <div className="bio-container">
      <div className="bio-card">
        <img src={profile} alt="Profile" className="profile-pic" />
        <h1>Ayesha Aslam</h1>
        <p>
          Graduated in 2025 with a degree in Software Engineering. Eager to
          explore new opportunities in Tech.
        </p>
        <ul>
          <li>Full Stack Development</li>
          <li>AI/ML</li>
          <li>Natural Language Processing</li>
        </ul>
      </div>
    </div>
  );
}

export default BioPage;

