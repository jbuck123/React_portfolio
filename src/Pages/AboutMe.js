import React from "react";

export default function AboutMe() {
  return (
    <div className="about-me-content">
      <div className="aboutmeContainer-left">
        <h1 className="name">James Buchmann</h1>
        <h2 className="title">Web Developer</h2>
        <div className="about-me-photo">
          <img src="./images/Aboutme.jpeg" alt="photo of me"></img>
        <p className="photo-context">(Happy guy in the white shirt)</p>
        </div>
        <p className="aboutMeText">
          Aspiring web-developer who loves React, UI / UX Design. and JavaScript. Creating websites is my passion, with passion comes dedication, to be dedicated requires a form of habit. 
        </p>

      </div>
      <div className="aboutmeContainer-right">
        <div className="right-content">
      <p className="right-body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
  
    

      </div>
    </div>
  );
}
