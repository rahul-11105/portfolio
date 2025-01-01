import React, { useState } from 'react'
import "./navbar.css";

import logo from "../source/main_logo-removebg-preview.png";
import contactlogo from "../source/contact_logo.png"
import {Link} from "react-scroll";
import list from "../source/list.png"



const Navbar = () => {
  const [showMenue,setshowMenue] = useState(false);
  return (
    <div> 
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo"/>
            <div className="desktopMenu">
                <Link className="links" activeclass="active" to='intro' spy={true} smooth={true} offset={10} duration={500}>Home</Link>
                <Link className="links" activeclass="active" to="skills" spy={true} smooth={true} offset={0} duration={1000}>About</Link>
                <Link className="links" activeclass="active" to="works" spy={true} smooth={true} offset={0} duration={1000}>Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

            }}>
                <img className="desktopMenuImg" src={contactlogo} alt="#"/>
                Contact_Me
            </button>

            <img className="list" src={list} alt="logo" onClick={()=>{setshowMenue(!showMenue)}}/>
            <div className="listMenu" style={{display:showMenue?"flex" : "none"}}>
                <Link className="opt" activeclass="active" to='intro' spy={true} smooth={true} offset={10} duration={500} onClick={()=>{setshowMenue(false)}}>Home</Link>
                <Link className="opt" activeclass="active" to="skills" spy={true} smooth={true} offset={0} duration={1000} onClick={()=>{setshowMenue(false)}}>About</Link>
                <Link className="opt" activeclass="active" to="works" spy={true} smooth={true} offset={0} duration={1000} onClick={()=>{setshowMenue(false)}}>Portfolio</Link>
                <Link className="opt" activeclass="active" to="contact" spy={true} smooth={true} offset={0} duration={1000} onClick={()=>{setshowMenue(false)}}>contact me</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
