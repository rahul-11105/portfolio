import React, { useState } from 'react'
import "./work.css"
import img1 from "../source/project1Img.png";
import img2 from "../source/project2Img.png";
import img3 from "../source/project3Img.png";
import img4 from "../source/project4Img.png";
import img5 from "../source/project5Img.png";
import img6 from "../source/project6Img.png";
import img7 from "../source/project7Img.png";
import img8 from "../source/project8Img.png";
import img9 from "../source/project9Img.png";







const Work = () => {
  const [more,setmore] = useState(false);
  return (
    <section id="works">
        <h2 className="workTile">My Portfolio</h2>
        
        <spane className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experiences to help businesses achieve their goals and create a strong online presence. </spane>
        <h2 className="projects">Quick access to<br/>My projects</h2>
        <div className="workImgs">
            <div className='project'>
              <h2 className='pHeading'>NewsMonkey</h2>
              <p className='pInfo'>
              React app for daily news of vereous categery
              </p>
              <div className='projectImg'>
                  <img src={img1} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                <a href='https://github.com/rahul-11105/newsapp' target="main"><button className='projectInfoBtn'>source code</button></a>
                

              </div>
            </div>

            <div className='project'>
            <h2 className='pHeading'>TextUtils</h2>
              <p className='pInfo'>
               React app for Fastest tool to manipulate your text!
              </p>
              <div className='projectImg'>
                  <img src={img2} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                <a href='https://github.com/rahul-11105/Text_Utils' target="main"><button className='projectInfoBtn'>source code</button></a>

              </div>
            </div>

            <div className='project'>
            <h2 className='pHeading'>Hodlinfo Clone</h2>
              <p className='pInfo'>
              This project is a clone of the hodlinfo.com website
              </p>
              <div className='projectImg'>
                  <img src={img3} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                
                <a href='https://github.com/rahul-11105/hodlinfo_clone' target="main"><button className='projectInfoBtn'>source code</button></a>

              </div>
            </div>

            <div className='project'>
             <h2 className='pHeading'>Amazon Clone</h2>
              <p className='pInfo'>
              This project is a clone of the Amazon.com website
              </p>
              <div className='projectImg'>
                  <img src={img4} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                <a href='https://github.com/rahul-11105/Amazon_Clone' target="main"><button className='projectInfoBtn'>source code</button></a>

              </div>
            </div>

            <div className='project'>
             <h2 className='pHeading'>FriendNet</h2>
              <p className='pInfo'>
              This is a full stack project of friend recomendation system. 
              </p>
              <div className='projectImg'>
                  <img src={img5} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                <a href='https://github.com/rahul-11105/FriendNet' target="main"><button className='projectInfoBtn'>source code</button></a>

              </div>
            </div>

            <div className='project'>
             <h2 className='pHeading'>Authentication system</h2>
              <p className='pInfo'>
              This is a full stack project for an JWT Authentication.
              </p>
              <div className='projectImg'>
                  <img src={img6} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                <a href='https://github.com/rahul-11105/Authentication_project' target="main"><button className='projectInfoBtn'>source code</button></a>

              </div>
            </div>

            <div className='moreProjects'style={{display:more?"flex":"none"}}>
            


            <div className='project'>
             <h2 className='pHeading'>inotebook</h2>
              <p className='pInfo'>
              This is a full stack project I created for my personal notes. 
              </p>
              <div className='projectImg'>
                  <img src={img7} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                <a href='https://github.com/rahul-11105/iNotebook' target="main"><button className='projectInfoBtn'>source code</button></a>
              </div>
            </div>


            <div className='project'>
             <h2 className='pHeading'>URL Shortner</h2>
              <p className='pInfo'>
              This project is for creating an short URL for an original URL.
              </p>
              <div className='projectImg'>
                  <img src={img8} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                <a href='https://github.com/rahul-11105/URL_shortner_project' target="main"><button className='projectInfoBtn'>source code</button></a>
              </div>
            </div>

            <div className='project'>
             <h2 className='pHeading'>Chrome Extension</h2>
              <p className='pInfo'>
               Chrome Extension for getting current Tab Title. 
              </p>
              <div className='projectImg'>
                  <img src={img9} alt="img" className="workImg"/>
              </div>
              <div className='projectInfo'>
                 
                <a href='https://github.com/rahul-11105/Chrome_Extension_Project' target="main"><button className='projectInfoBtn'>source code</button></a>
              </div>
            </div>

            </div>
        </div>
        <button className="workBtn" style={{display:more?"none":"flex"}}onClick={()=>{setmore(true);}}>see more</button>
        <button className="workBtn2" style={{display:more?"flex":"none"}} onClick={()=>{setmore(false)}}>see less</button>

        
    </section>
  )
}

export default Work;