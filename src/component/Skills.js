import React from "react";
import Rotate from 'react-reveal/Rotate';


export default function Skills() {
  return (
    <div className="child-container">
      <h1>Skills</h1>
      {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> */}
      <div className="grid-container">
      <Rotate top left>
          <i className="devicon-javascript-plain colored"></i>
        </Rotate>
        <Rotate>

          <i className="devicon-css3-plain colored"></i>
        </Rotate>
        <Rotate top right>
  
          <i className="devicon-html5-plain colored"></i>
        </Rotate>
        <Rotate top left>
     
          <i className="devicon-react-original colored"></i>
        </Rotate>
        <Rotate>

          <i className="devicon-materialui-plain colored"></i>
        </Rotate>
        <Rotate top right>
    <i className="devicon-mongodb-plain colored"></i>
        </Rotate>
        <Rotate bottom left>

          <i className="devicon-git-plain-wordmark colored"></i>
        </Rotate>
        <Rotate>

          <i className="devicon-github-original-wordmark"></i>
        </Rotate>
        <Rotate bottom right>

          <i className="devicon-nodejs-plain colored"></i>
        </Rotate>
        <Rotate bottom left>
 
          <i className="devicon-express-original-wordmark"></i>
        </Rotate>
        <Rotate>
          <i className="devicon-graphql-plain-wordmark colored"></i>
        </Rotate>
      </div>
    </div>
  );
}
