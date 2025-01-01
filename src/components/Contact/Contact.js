import React from 'react'
import "./Contact.css";
import instagram from "../source/Instagram_logo.avif";
import linkedin from "../source/linkedin_logo.png";
import github from "../source/github_logo.jpg";


const Contact = () => {
  return (
    <section id="contactPage">
        <div id='contact'>
            <h1 className="contactPageTitle">Contact me</h1>
            <span className="contactDesc">Please fill out the form bellow to discuss any work opportunities.</span>
            <form className="contactForm">
                <input className="name" placeholder='Your name'/>
                <input className="email" placeholder='Your email'/>
                <textarea className='msg' name='message' rows={5} placeholder="Your message"/>
                <button className='submitBtn' type='submit' value="send">submit</button>
                <div className='logos'>
                    <img className='logo' src={instagram} alt='linkedin'/>
                    <img className='logo' src={github} alt='linkedin'/>
                    <img className='logo' src={linkedin} alt='linkedin'/>
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
