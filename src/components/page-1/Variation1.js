import React, { useState, useEffect } from 'react';
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

import InfinityModule from './InfinityModule';
import exp from './images-1/exp.png';

const Variation1 = () => {
  const slideTexts = [
    "Endless scrolling is so last season. Your fingers (and your brain) deserve better. With BuyDost, you swipe — fast, fresh and fun. Shopping has never felt this satisfying.",
    "BuyDost isn't just an app, it's your shopping buddy. Curated collections and endless discoveries await in every swipe.",
    "With BuyDost, each swipe is a step closer to discovering something you love. It's shopping, reimagined just for you."
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideTexts.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="variation-container">
      <img src={logo} alt="Company Logo" className="logo-1" />
      
      <div className='buy'>
        <h1>Welcome to <span>BuyDost</span></h1>
        <p className='p23'>
          We’re about to change the way you shop forever — it’s going to be more fun,<br />
          <p className='sub'>more personal, and more connected</p>
        </p>
        <div className='model'>
          <img src={Qr} alt="Qr" className='qr'/>
          <p className='para'>Scan the code to join our waitlist and enjoy exclusive perks</p>
          <img src={Mobile} alt="Mobile" className='mobile'/>
       
        </div>
      </div>

    
    <div className='blow'>
  <img src={Head} alt="Head" className='heading'/>
  <p className='p49'>Here's what makes BuyDost unlike anything you've tried before</p>
  <div className='module'>
    <img src={Mobile2} alt="Phone" className='m-2'/>
    <img src={Say} alt="say" className='head-2'/>
    <p className='r slide-fade'>{slideTexts[currentSlide]}</p>

    <div className="slider-buttons">
      <button className="slide-btn" onClick={() => setCurrentSlide((currentSlide - 1 + slideTexts.length) % slideTexts.length)}>Prev</button>
      <button className="slide-btn" onClick={() => setCurrentSlide((currentSlide + 1) % slideTexts.length)}>Next</button>
    </div>
  </div>
</div>


      <div>
        <Details />
      </div>

      <div>
        <h1 className='h40'>Just One More <span className='sh'>Swipe.</span></h1>
        <p className='p50'>Shopping doesn't always mean spending. At BuyDost, just swipe for fun — Fair warning: extreme swiping satisfaction ahead</p>
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
       <img src={exp} className='exp'/>
      </div>
    </div>
  );
};

export default Variation1;
