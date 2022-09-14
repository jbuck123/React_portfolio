// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import MyProjects from "./component/MyProjects";

import AboutMe from './component/AboutMe';
import Resume from "./component/Resume";
import Clock from "./component/Clock"
import './App.css';


// look into using buttons instead of anchor tags




function App() {
  const homePage = (
    <div>
      <h1>About Me</h1>

      <img
        className="aboutMePicture"
        src="images/About_me.jpeg"
        alt="Blue Ribbon Pines Disc Golf Course"
      ></img>
    </div>
  );
  const [page, setPage] = useState(homePage);
  const handleClick = (event) => {
    setPage(event.target.dataset.page);
    console.log(event.target.dataset);
  };

  return (
    <div>
      <header className="header">
        <h1>James Buchmann</h1>
        <a onClick={handleClick} data-page="aboutMe">
          About Me
        </a>
        <a onClick={handleClick} data-page="projects">
          My Projects
        </a>

        <a onClick={handleClick} data-page="resume">
          Resume
        </a>
      </header>
      <body className="bodyComponents">
        {/*show component on click */}
        {page === "aboutMe" && <AboutMe />}
        {page === "projects" && <MyProjects />}
       
        {page === "resume" && <Resume />}
      </body>
      <footer>
        <div className="wrapper">
          <div className="links">
            <a href="google.com">
              <img
                src="Logos/link.png"
                alt="Linkiden logo"
                className="logo"
              ></img>
            </a>
            <a href="google.com">
              <img
                src="Logos/GitHub_Logo.png"
                alt="github logo"
                className="logo"
              ></img>
            </a>
            <a href="google.com">
              <img
                src="Logos/gmail.png"
                alt="gmail logo"
                className="logo"
              ></img>
            </a>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </footer>
    </div>
  );
}

export default App;







