import { NavLink } from "react-router-dom";
// import logo from "../images/GAMRx10.png";

function Header(props) {
  return (
    <header >
    
        <nav className="navbar">
          {/* <img id="logoPic" src={logo} alt="logo" /> */}
          <div className="navLinks">
          <NavLink className={"link"} to="/">Home</NavLink> 
          </div>
          <div className="navLinks">
          <NavLink className={"link"} to="/Projects">Projects</NavLink>
          </div>
          <div className="navLinks">
          <NavLink className={"link"} to="/Resume">Contact Me</NavLink>
          </div>
        </nav>

    </header>
  );
}

export default Header;