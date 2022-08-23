// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import MyProjects from "./component/MyProjects";
import Contact from "./component/Contact";
import AboutMe from './component/AboutMe';
import './App.css';


// look into using buttons instead of anchor tags




function App() {
  const [aboutMe, setAboutMe] = useState(false);

  const aboutMeClick = (event) => {
    //toggle shown state
    setAboutMe((current) => !current);
  };
  const [myProjects, setMyProjects] = useState(false);

  const projectClick = (event) => {
    //toggle shown state
    setMyProjects((current) => !current);
  };
  const [contactForm, setContact] = useState(false);
  const contactClick = (event) => {
    setContact((current) => !current);
  };
  return (
    <div>
      <div className="header">
        <h1>James Buchmann</h1>
        <div className="navLinks">
          <a onClick={aboutMeClick}>About Me</a>
          {/*show component on click */}
          {aboutMe && <AboutMe />}
          <a onClick={projectClick}>My Projects</a>
          {myProjects && <MyProjects />}
          <a onClick={contactClick}>Contact Me</a>
          {contactForm && <Contact />}
        </div>
      </div>   

      
      </div>
      
  );
}

export default App;
