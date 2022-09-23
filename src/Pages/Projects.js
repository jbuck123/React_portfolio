import React from "react";
import ProjectItem from "../component/ProjectItem" 
import Tomatoes from '../assets/tomatoes.gif'
// import imgs

import "../styles/Project.css"

export default function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name = "Certified Tomatoes" image={Tomatoes} />
        <ProjectItem name = "Certified Tomatoes" image={Tomatoes} />
        <ProjectItem name = "Certified Tomatoes" image={Tomatoes} />
        <ProjectItem name = "Certified Tomatoes" image={Tomatoes} />
      </div>
    </div>
  );
}
