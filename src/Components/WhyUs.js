import React from 'react'
import './WhyUs.css';
import whyusoffice from '../Asset/whyus-office.png';
import { HashLink } from 'react-router-hash-link';

function WhyUs() {
    return (
        <div className='whyus-container'>
            <div className='whyus-subcontainer'>
                <div>
                    <h2>WHY CHOOSE US</h2>
                    <h1>Why The MonkLogic <br></br><span>Ranked Top</span> Among The <br></br>Leading Web & App <br></br>Development Companies</h1>
                    <p>At our core, we're technology enthusiasts, but we also understand that our clients have many priorities to juggle. That's where we come in as specialists who excel at delivering high-quality software solutions to help our clients reach their goals.
                    </p>
                </div>
                <div>
                    <div className='xcontainer'>
                    <div className="xbox"></div>
                    <div className='xstack-top'><img src={whyusoffice}></img></div>
                    </div>
                    
                    <div className='stack-down-text'><p>We're here to support you every step
                        of the way, through any challenges that
                        may arise. Our team prioritizes efficient,
                        transparent communication and creates a 
                        pleasant, relaxed atmosphere to work in.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Let's Start a New Project Together</h2>
                <HashLink smooth to="/#contactform">
                <button id="request-a-qoute">Request a Quote</button>
                </HashLink>
            </div>

            <div></div>

        </div>
    )
}

export default WhyUs