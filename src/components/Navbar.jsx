import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div>
        <nav className="navbar">
            <div className="logo">
                <h1 style={{ color: "white"}}>Alex Floyd</h1>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
            <div className={`links ${menuOpen ? "open" : ""}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "link-format active" : "link-format"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "link-format active" : "link-format"}>About</NavLink>
                <NavLink to="/schedule" className={({ isActive }) => isActive ? "link-format active" : "link-format"}>Upcoming Shows</NavLink>
                <NavLink to="/bands" className={({ isActive }) => isActive ? "link-format active" : "link-format"}>Bands</NavLink>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;