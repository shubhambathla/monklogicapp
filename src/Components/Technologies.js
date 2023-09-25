import React from 'react'
import './Technologies.css';
import './Services.css';
import WooIcon from '../Asset/woo-icon.png'
import ShopifyIcon from '../Asset/shopify.png';
import MagentoIcon from '../Asset/magento-icon.png';
import ReactIcon from '../Asset/react-icon.png';
import UiUxIcon from '../Asset/uiuxicon.png';
import awsIcon from '../Asset/aws-icon.png';
import phpIcon from '../Asset/php.svg';
import nodeJSIcon from '../Asset/nodeJS.png'

function Technologies() {
  return (
    <div className='tech-container'>
        <h1>Technologies</h1>
        
          <div className='services-tiles-desktop' id="services-tiles-desktop">
            <div className='tech-tile-row'>
                <div className='tech-tile'><img src={WooIcon} width='80px'></img> <br></br>WooCommerce</div>
                <div className='tech-tile'><img src={ShopifyIcon} width='70px'></img><br></br>Shopify</div>
                <div className='tech-tile'><img src={MagentoIcon} width='70px'></img><br></br>Magento</div>
                <div className='tech-tile'><img src={ReactIcon} width='70px'></img><br></br>React</div>
            </div>
            <div className='tech-tile-row'>
                <div className='tech-tile'><img src={UiUxIcon} width='70px'></img><br></br>Designing</div>
                <div className='tech-tile'><img src={awsIcon} width='70px'></img><br></br>AWS</div>
                <div className='tech-tile'><img src={phpIcon} width='70px'></img><br></br>PHP</div>
                <div className='tech-tile'><img src={nodeJSIcon} width='70px'></img><br></br>Node.js</div>
            </div>
          </div>
            
        <div className='services-tiles-mobile'>
            <div className='tech-tile-row-mobile'>
                <div className='tech-tile-mobile'><img src={WooIcon} width='50px'></img> <br></br>WooCommerce</div>
                <div className='tech-tile-mobile'><img src={ShopifyIcon} width='50px'></img><br></br>Shopify</div>
            </div>
            <div className='tech-tile-row-mobile'>
                <div className='tech-tile-mobile'><img src={MagentoIcon} width='50px'></img><br></br>Magento</div>
                <div className='tech-tile-mobile'><img src={ReactIcon} width='50px'></img><br></br>React</div>
            </div>
            <div className='tech-tile-row-mobile'>
                <div className='tech-tile-mobile'><img src={UiUxIcon} width='50px'></img> <br></br>Designing</div>
                <div className='tech-tile-mobile'><img src={awsIcon} width='50px'></img><br></br>AWS</div>
            </div>
        </div>
        
    </div>
  )
}

export default Technologies