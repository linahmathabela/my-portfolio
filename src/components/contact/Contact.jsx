import React from 'react'
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import './contact.css'
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  //const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_btn1lms",
        "template_0opjafe",
        formRef.current,
        "WAIxTqViqEh4U2C1A"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className='c'>
       <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              072 899 0103
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              linahmathabela2575@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              33 Goodyear Street, Vanderbijlpark C.W.6, vanderbijlpark 1900, Qauteng
            </div>
           
            <div className='icons'>
                
          <a
            href="https://www.linkedin.com/in/linah-mathabela-369a8820b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
         
        
          <a
            href="https://github.com/linahmathabela"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        
       
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input   type="text" placeholder="Email" name="user_email" />
            <textarea   rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
