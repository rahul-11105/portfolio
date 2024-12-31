import React from 'react'
import "./navbar.css";
import {Link} from "react-router-dom";



const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <img className="logo" src="" alt="logo"/>
            <div className="desktopMenu">
                <Link className="links" to="/Home">Home</Link>
                <Link className="links" to="/About">About</Link>
                <Link className="links" to="/Clients">Clients</Link>
                <Link className="links" to="/Portfolio">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn">
                <img className="desktopMenuImg" src="" alt="#"/>
                Contach Me
            </button>
        </nav>
    </div>
  )
}

export default Navbar;
