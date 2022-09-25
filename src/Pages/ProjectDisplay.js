import React from "react"
import { useParams} from "react-router-dom"
import { ProjectList } from "../helpers/ProjectList"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Link } from 'react-router-dom'

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id]
    return <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p>{project.Skills}</p>
        <p>{project.gituhb}</p>
        <a href={project.github} ><GitHubIcon /> </a>
       
    </div>

    // parameter is coming from the URL. 
    // in app.js there is a route with the a path /Project/:ID .... "ID" can be anything
    // it can 1212 or 1212 ... typing in localHost:3000/Projects/12 will display 12 on the page.
}

export default ProjectDisplay