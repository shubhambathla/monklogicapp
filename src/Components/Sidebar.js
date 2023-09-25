import React from 'react'
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
function Sidebar() {
  
  const servicesData = {
    servicesTitle: 'Services',
    servicesContent: Array("Website Development","Crypto Solutions","Web Designing","Cloud Services","Content Creation","Digital Marketing")
  };
  const {servicesTitle, servicesContent } = servicesData;
  const [isActiveService, setIsActiveService] = useState(false);
  
  const technologyData = {
    title: 'Technologies',
    content: Array("Magento","Woocommerce","Shopify","React","AWS","Adode Illustrator")
  };
  const { title, content } = technologyData;
  const [isActive, setIsActive] = useState(false);
  
  return (
    <Menu>
      <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActiveService(!isActiveService)}>
            <div>{servicesTitle}</div>
            <div>+</div>
          </div>
          {isActiveService && (<div className="accordion-content">{servicesContent.map((list) => (<div key={list}>{list}</div>))}</div>)}
        </div>
      </div>
      </React.Fragment>
      <React.Fragment>
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
              <div>{title}</div>
              <div>+</div>
            </div>
            {isActive && (<div className="accordion-content">{content.map((list) => (<div key={list}>{list}</div>))}</div>)}
          </div>
        </div>
      </React.Fragment>

      <a className="menu-item" href="/pizzas">
        Our Work
      </a>
      <a className="menu-item" href="/desserts">
        Get an Estimate
      </a>
    </Menu>
  )
}

export default Sidebar