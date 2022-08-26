// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import MyProjects from "./component/MyProjects";
import Contact from "./component/Contact";
import AboutMe from './component/AboutMe';
import Resume from "./component/Resume";
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
  const [resume, setResume] = useState(false);

  const resumeClick = (event) => {
    setResume((current) => !current);
  };
  return (
    <div>
      <header className="header">
        <h1>James Buchmann</h1>
        <a onClick={aboutMeClick}>About Me</a>
        <a onClick={projectClick}>My Projects</a>
        <a onClick={contactClick}>Contact Me</a>
        <a onClick={resumeClick}>Resume</a>
      </header>
      <body className="bodyComponents">
        {/*show component on click */}
        {aboutMe && <AboutMe />}
        {myProjects && <MyProjects />}
        {contactForm && <Contact />}
        {resume && <Resume/>}
      </body>
      <footer>
        <a href="google.com">
          <img src="Logos/linkedin.png" alt="Linkiden logo" className="logo"></img>
        </a>
        <a href="google.com">
          <img src="Logos/github.jpg" alt="github logo" className="logo"></img>
        </a>
        <a href="google.com">
          <img src="Logos/gmail.png" alt="gmail logo" className="logo"></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
