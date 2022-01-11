import React, { useState, useRef } from 'react';
import "./contact.scss";
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  //--------------------------------------
  const [message, setMessage] = useState("");
  

  function handleChange(event){

      setName(event.target.value);
      
  }

  function handleClick(event){
    
    setHeading(name);
    
   
    event.preventDefault();
  }

  function displayMessage(event) {

    setMessage("Sorry, I didn't receive your email.");
    event.preventDefault();
  };

  
function sendEmail(e){
  
  e.preventDefault();

    emailjs.sendForm('gmail', 'template_lgzz7ig', form.current, 'user_XmQb03asfTM97RCYERjck')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    // to clear the message form 
    e.target.reset();
}

  return (

    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        
        <h1>Contact.</h1><br></br>
        
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form onSubmit={displayMessage}>
        
          
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="user_email"/>
          <textarea placeholder="Message" name="message"></textarea>          
            

          <button type="submit">Send</button>

            <p className="message" style={{color: "white"}}>{message}</p> 
          
        </form>
        </div>
      </div>
    
  );
}


