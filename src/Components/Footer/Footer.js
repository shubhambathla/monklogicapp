import React from 'react'
import './Footer.css';
import star from '../../Asset/favourite.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container' id="footer-container">
        <div className='footer-aboutus'>
            <h2>About us</h2>
            <p>MonkLogic is a reputed name among IT companies in Delhi, India, & Canada. And as a team, we work to fulfill our clients need to meet the goal. You can go through our testimonial section to find out the list of the clients and companies we have worked for.</p>
        </div>
        <div className='footer-services'>
            <h2>Services</h2>
            <p>Web Design & Development</p>
            <p>Crypto Solutions</p>
            <p>Digital marketing</p>
            <p>Cloud Services</p>
            <p>Content Creation</p>
            <p>CMS Migratioon</p>
        </div>
        <div className='footer-address'>
            <h2>Get In Touch</h2>
            <p>HR: hr@monklogic.com</p>
            <p>Sales: sales@monklogic.com</p>
            <p>India: +91 9999999999</p>
            <p>Canada: +1 (444) 444 4444</p>
        </div>
        
    </div>
    <div className='footer-rating'>
        <div>
          <img src={star} width='15px'/>
          <img src={star} width='15px'/>
          <img src={star} width='15px'/>
          <img src={star} width='15px'/>
          <img src={star} width='15px'/> 
        </div>

        4.9/5.0 by 100+ customers for 180+ Web and Mobile App Development Projects.
    </div>
    </div>
    
  )
}

export default Footer