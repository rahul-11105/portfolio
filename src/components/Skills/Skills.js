import React from 'react'
import "../Skills/Skills.css";
import reactimg from "../source/react.webp";
import Backend_img from "../source/node.webp";
import MERN_img from "../source/MERN-1.webp";
const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do.</span>
        <span className="skillDesc">
            I am skilled and passinated web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in <br/><b className="skilllist">HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL as well as Java.</b>
        </span>
        <div className="skillBars">
            <div id="react" className="skillBar"> 
                <img className ="skillBarImg" src={reactimg} alt="img"/>
                <div className="skillBarTxt">
                    <h2>React Frontend Development.</h2>
                    <p>Can build single page applications using react.js</p>
                </div>
            </div>

            <div id="node" className="skillBar"> 
                <img className ="skillBarImg" src={Backend_img} alt="img"/>
                <div className="skillBarTxt">
                    <h2>Backend Development.</h2>
                    <p>Can handle the backend of websites using Node.js, Express.js, MongoDB and SQL.</p>
                </div>
            </div>

            <div id="mern" className="skillBar"> 
                <img className ="skillBarImg" src={MERN_img} alt="img"/>
                <div className="skillBarTxt">
                    <h2>Full Stack Development</h2>
                    <p>Can build full stack web applications using MERN.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills;
