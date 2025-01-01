import React from 'react'
import "./work.css"
import img1 from "../source/Img1.jpeg";
import img2 from "../source/img2.avif";

import img4 from "../source/img4.jpg";
import img5 from "../source/img5.jpg";
import img6 from "../source/img6.avif";


const Work = () => {
  return (
    <section id="works">
        <h2 className="workTile">My Portfolio</h2>
        <spane className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experiences to help businesses achieve their goals and create a strong online presence. </spane>
        <div className="workImgs">
            <img src={img5} alt="img" className="workImg"/>
            <img src={img2} alt="img" className="workImg"/>
            <img src={img4} alt="img" className="workImg"/>
            <img src={img2} alt="img" className="workImg"/>          

        </div>
        <button className="workBtn">See More</button>

        
    </section>
  )
}

export default Work;