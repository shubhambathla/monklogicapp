import React from 'react'
import './Services.css';
import WebServicesIcon from '../Asset/editor.png';
import digiMarketingIcon from '../Asset/social-media.png';
import uiuxIcon from '../Asset/ui.png';
import cloudServicesIcon from '../Asset/CloudServicesIcon.png';
import CMSIcon from '../Asset/CMSIcon.png';
import contentCreationIcon from '../Asset/contentIcon.png'
import nftIcon from '../Asset/nft.png';

function Services() {
  return (
    <div className='services-container' id="services-container">
        <div className='services-text'>What<br></br> We<br></br> Do</div>
        <div className='services-text-mobile'>What We<br></br> Do</div>
        <div className='services-tiles'>
            <div className='services-tile-row'>
                <div className='services-tile tile1'><img src={WebServicesIcon} width='50px'></img> <br></br>Website Development</div>
                <div className='services-tile tile2'><img src={nftIcon} width='50px'></img><br></br>Crypto Solutions</div>
                <div className='services-tile tile1'><img src={uiuxIcon} width='50px'></img><br></br>Web Designing</div>
            </div>
            <div className='services-tile-row'>
                <div className='services-tile tile2'><img src={cloudServicesIcon} width='50px'></img><br></br>Cloud Services</div>
                <div className='services-tile tile1'><img src={contentCreationIcon} width='50px'></img><br></br>Content Creation</div>
                <div className='services-tile tile2'><img src={digiMarketingIcon} width='50px'></img><br></br>Digital Marketing</div>
            </div>
        </div>
    </div>
  )
}

export default Services