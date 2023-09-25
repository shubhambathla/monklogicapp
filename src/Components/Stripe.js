import React from 'react'
import './Stripe.css';
import fbIcon from '../Asset/icons-fb-50.png';
import instagramIcon from '../Asset/icons-instagram-50.png';
import linkedinIcon from '../Asset/icons-linkedin-50.png';


function Stripe() {
  return (
    <div className='stripe'>
        <div className='stripe-socials'><img src={fbIcon}></img><img src={instagramIcon}></img><img src={linkedinIcon}></img></div>
        <div className='stripe-contacts'><p>Email: sales@monklogic.com </p>&nbsp;<p>{''}/ India (sales): +91 999 999 9999 </p>&nbsp; <p> | HR Enquiry: +91 999 999 999</p>&nbsp; <p>Tech Blog| UX Blog </p></div>
    </div>
  )
}

export default Stripe