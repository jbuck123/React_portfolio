import React from "react";
import ProfilePic from "../assets/Aboutme.jpeg"

export default function AboutMe() {
  return (
    <div className="about-me-content">
      <div className="aboutmeContainer-left">
        <h1 className="name">James Buchmann</h1>
        <h2 className="title">Web Developer</h2>
        <div className="about-me-photo">
          <img src={ProfilePic} alt="photo of me"></img>
        </div>
        <p className="photo-context">(Happy guy in the white shirt)</p>
        <p className="aboutMeText">
          Aspiring web-developer who loves React, UI / UX Design. and JavaScript. Creating websites is my passion, with passion comes dedication, to be dedicated requires a form of habit. 
        </p>

      </div>
     
    </div>
  );
}
