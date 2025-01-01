import React from 'react';
import { useRef } from 'react';
import "./Contact.css";
import instagram from "../source/Instagram_logo.png";
import linkedin from "../source/linkedin_logo.png";
import github from "../source/github-512.webp";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hutrpgb', 'template_o9ou607', form.current, {
        publicKey: 'kjfAsxobYVoHup6y9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("email send successfully..!");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (
    <section id="contactPage">
        <div id='contact'>
            <h1 className="contactPageTitle">Contact me</h1>
            <span className="contactDesc">Please fill out the form bellow to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input className="name" placeholder='Your name' name='from_name'/>
                <input className="email" placeholder='Your email' name='your email'/>
                <textarea className='msg' name='message' rows={5} placeholder="Your message"/>
                <button className='submitBtn' type='submit' value="send">submit</button>
                <div className='logos'>
                    <img className='logo' src={instagram} alt='linkedin'/>
                    <img className='logo' src={github} alt='linkedin'/>
                    <img id='linkedin' className='logo' src={linkedin} alt='linkedin'/>
                    
                </div>
            </form> 
        </div>
    </section>
  )
}

export default Contact;
