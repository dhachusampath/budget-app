import React from 'react';

import './Variation1.css';

import logo from './images-1/logo-1.png'; 
import Qr from './images-1/qrscan.png';
import Mobile from './images-1/mobile.png';
import Mobile2 from './images-1/mobile (2).png';
import hand from './images-1/hand.png';
import Details from '../Details/Details';
import Head from './images-1/Ready.png';
import New from './images-1/new.png';
import Say from './images-1/Say.png';

import playstore from './images-1/logoss.png';
import InfinityModule from './InfinityModule';

const Variation1 = () => {
  return (
    <div className="variation-container">
      <img src={logo} alt="Company Logo" className="logo-1" />
      
      <div className='buy'>
        <h1>Welcome to <span>BuyDost</span></h1>
        <p className='p23'>We’re about to change the way you shop forever — it’s going to be more fun,<br /><p className='sub'>more personal, and more connected</p> </p>
        <div className='model'>
          <img src={Qr} alt="Qr" className='qr'/>
          <p className='para'>Scan the code to join our waitlist and enjoy exclusive perks</p>
          <img src={Mobile} alt="Mobile" className='mobile'/>
        </div>
      </div>

      <div className='blow'>
      <img src={Head} alt="Head" className='heading'/>
        <p className='paragraph'>Here's what makes BuyDost unlike anything you've tried before</p>
        <div className='module'>
          <img src={Mobile2} alt="Phone" className='m-2'/>
          <img src={Say} alt="say" className='head-2'/>
          <p className='p2'>Endless scrolling is so last season. Your fingers
           (and your <br />brain) deserve better. With BuyDost, you swipe -- fast
          ,<br /> fresh and fun. We promise that shopping has never <br />felt this satisfying</p>
        </div>
      </div> 

      <div>
        <Details />
      </div>

      <div>
        <h1 className='lh'>Just One More <span className='sh'>Swipe.</span></h1>
        <p className='p'>Shopping doesn't always mean spending. At BuyDost, just swipe for fun — Fair warning: extreme swiping satisfaction ahead</p>
      </div>

      <div className='model-3'>
        <h1 className='header-6'>Got Great Taste? Get Paid For It.</h1>
        <p className='p-7'>Curate public collections, inspire others, and earn when they buy through your lists. Style pays!</p>
        <img src={New} alt="New" className='new'/>
      </div>

      <div className='transp'>
        <img src={hand} alt="hand" className='hand' />
      </div>

        <div>
        <InfinityModule />

        </div>
          <div className='download-section'>
        <h1 className='download-text'>Download now <span className='brand'>BuyDost</span></h1>
        <div className='store-buttons'>
          <img src={playstore} alt="Google Play" className='store-img' />
        </div>
      </div>


    </div>
  );
};

export default Variation1;
