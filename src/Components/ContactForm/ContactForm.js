import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pzi4ygo', 'estimate_contact_form', form.current, 'WORjEBY_5iLTcZ89y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form-container' id="contactform">
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <h3>Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</h3>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Phone Number</label>
            <input type="number" name="phone_no"/>
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
    
  );
};