// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Outlet,  } from "react-router-dom"

// import MyProjects from "./Pages/MyProjects";
import { Routes, Route} from "react-router-dom"
import AboutMe from "./Pages/AboutMe"
import Header from './component/Header'
import MyProjects from "./Pages/MyProjects";
import Resume from "./Pages/Resume"





// look into using buttons instead of anchor tags

// instead of loadin


function App() {
  return (
    <div>
    <Header />
        <Routes>
        <Route path="/" element={<AboutMe ></AboutMe>}></Route>
        <Route path="/Projects" element={<MyProjects />}></Route>
        <Route path="/Resume" element={<Resume />}></Route>
        </Routes>
    
    </div>
  )
}

export default App;







