import React from "react";
import ProjectItem from "../component/ProjectItem" 
import Tomatoes from '../assets/certified-tomatoes.gif'
// import imgs

import "../styles/Projects.css"

export default function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="prjectList">
        <ProjectItem name = "Certified Tomatoes" image={Tomatoes} />
      </div>
    </div>
  );
}
