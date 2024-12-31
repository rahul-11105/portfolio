import React from 'react'
import {Link} from "react-router-dom";
import "./intro.css";
import img from "../source/Img.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introTxt">I'm <spam className="introName">Rahul</spam><br/>Website Designer</span>
        <p className="introPara">I am skilled web designer with experience in creating<br/> visually appealing an user friendly websites</p>
        
        <Link className="introBtn" to="#"><button className="btn">Hire Me</button></Link>
      </div>
      <div className="introImg">
        <img src={img}></img>
      </div>
    </section>
  )
}

export default Intro;
