import React from 'react'
import './Header.css';
import logo from '../Asset/logo.png';
import monk from '../Asset/tech-monk.png';
import { SlMenu } from "react-icons/sl";
import { slide as Menu } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link';

function Header() {
    function showSettings (event) {
        event.preventDefault();
      }
      const linkStyle = {
        // margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };
      const linkStyleButton = {
        textDecoration: "none",
        color: 'white'
      };
  return (
    <div>
        <div className='header'>
        <div className='header-logo'><img src={logo}></img></div>
        <div className='header-list-and-button'>
            <div>
                <ul className='header-list'>
                <HashLink smooth to="/#services-container" style={linkStyle}>
                    <li>Services</li>
                </HashLink>   
                <HashLink smooth to="/#services-tiles-desktop" style={linkStyle}>
                    <li>Technologies</li>
                </HashLink>    
                <HashLink smooth to="/#footer-container" style={linkStyle}> 
                    <li>Contact Us</li>
                </HashLink>    
                    {/* <li>Contact Us</li> */}
                </ul>
            </div>
            <HashLink smooth to="/#contactform">
                <div className='header-start-project'>
                   
                        <button className='header-start-project-button' style={linkStyleButton}>
                            <p>Start a Project</p>
                            <img src={monk}></img>
                        </button>
                    
                </div>
            </HashLink>
        </div>
        
        </div>
        <div className='m-header'>
               
                <div className='m-header-logo'>
                {/* <div className='stripe'><p>Stripe</p></div> */}
                <img src={logo}></img></div>

                
            </div>
        </div>
    
  )
}

export default Header