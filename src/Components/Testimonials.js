import React from 'react'
import './Testimonials.css'

function Testimonials() {
  return (
    <div className='testimonial-container'>
        <div className='testimonial-subcontainer'>
            <div className='testimonial-subcontainer-left'>
                <h2>TESTIMONIAL</h2>
                <h1>THE FEEDBACKS WE RECEIVE <br></br>ARE <span>IMPORTANT</span> TO US</h1>
                <p>MonkLogic is a reputed name 
                among IT companies in Delhi, India, 
                & Canada. And as a team, we
                work to fulfill our clients need to 
                meet the goal. You can go through 
                our testimonial section to find out 
                the list of the clients and companies
                we have worked for.
                </p>
            </div>
            
            <div className='testimonial-subcontainer-right'>
                <p><br></br>Awesome team, very prompt and
                    helpful. A perfect team to partner
                    with for a new start up
                    <h4>-Parmesh Patel</h4>
                </p>
                
            </div>
        </div>
        
    </div>
  )
}

export default Testimonials