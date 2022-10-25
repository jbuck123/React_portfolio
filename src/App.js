// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Outlet,  } from "react-router-dom"

// import MyProjects from "./Pages/MyProjects";
import { Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Header from './component/Header'







// look into using buttons instead of anchor tags

// instead of loadin


function App() {
  return (
    <div>
          <Header />
        <Routes>
        <Route path="/React_portfolio" element={<HomePage />}></Route>
        </Routes>
    
    </div>
  )
}

export default App;







