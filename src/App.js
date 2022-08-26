// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import MyProjects from "./component/MyProjects";
import Contact from "./component/Contact";
import AboutMe from './component/AboutMe';
import Resume from "./component/Resume";
import Clock from "./component/Clock"
import './App.css';


// look into using buttons instead of anchor tags




function App() {
  const homePage = ( 
    <div>
    <h1>About Me</h1>
    
    <img className='aboutMePicture' src='images/About_me.jpeg' alt='Blue Ribbon Pines Disc Golf Course'></img>
 </div>
  )
  const [page, setPage] = useState(homePage)
  const handleClick = (event) => {
    setPage(event.target.dataset.page)
    console.log(event.target.dataset)
  }
  // handlePage = () => {
  //   switch(page) {
  //     case "aboutMe": 
  //         return <AboutMe/>
  //     case 
  //   }
  // }
  return (
    <div>
      <header className="header">
        <h1>James Buchmann</h1>
        <a onClick={handleClick} data-page="aboutMe" >About Me</a>
        <a onClick={handleClick} data-page="projects">My Projects</a>
        <a onClick={handleClick} data-page="contact" >Contact Me</a>
        <a onClick={handleClick} data-page="resume" >Resume</a>
      </header>
      <body className="bodyComponents">
        {/*show component on click */}
        {page === "aboutMe" && <AboutMe />}
        {page === "projects" && <MyProjects />}
        {page === "contact"&& <Contact />}
        {page === "resume"&& <Resume/>}

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





// old code 


// const [aboutMe, setAboutMe] = useState(false);

//   const aboutMeClick = (event) => {
//     //toggle shown state
//     setAboutMe((current) => !current);
    
//   };
//   const [myProjects, setMyProjects] = useState(false);

//   const projectClick = (event) => {
//     //toggle shown state
//     setMyProjects((current) => !current);
//   };

//   const [contactForm, setContact] = useState(false);

//   const contactClick = (event) => {
//     setContact((current) => !current);
//   };
//   const [resume, setResume] = useState(false);

//   const resumeClick = (event) => {
//     setResume((current) => !current);
//   };




