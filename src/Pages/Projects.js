import React from "react";
import ProjectItem from "../component/ProjectItem" 
import { ProjectList } from "../helpers/ProjectList"
// import imgs

import "../styles/Project.css"

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="title"> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map(( project, idx ) => {
          return <ProjectItem id={idx} name = { project.name } image = { project.image } /> 
        })}
      </div>
    </div>
  );
}
