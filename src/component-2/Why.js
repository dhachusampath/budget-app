import React from 'react';
import './Why.css';
import WhyDetails from './WhyDetail';
const certificate = require('../components/page-1/images-1/certificate.png');
const pre1 = require('../component-2/pre/pre-1.png');
const pre2 = require('../component-2/pre/pre-2.png');
const pre3 = require('../component-2/pre/pre-3.png');
const growth = require('../component-2/pre/Growth.png');
const Why =() =>{


  return(
    <div>
    <h1 className='h9'>Why Choose <span>BuyDost?</span></h1>
    <div className='why'>

     <h2 className='h10'>Guaranteed Visibility.</h2>
       <img src={certificate} alt="certificate" className='certificate'/>
     <p className='p10'>Your product gets full-screen attention --no more getting buried on page 5.Every listing gets the spotlight it deserves.</p>
     <h1 className='h11'>#OnlyOnBuyDost</h1>
       
    </div>
      <div>
      <WhyDetails />
      </div>
      <div className='p-3'>
      <div className='b-1'>
      <img src={pre1} className='pre-1'/>
      <h1 className='g-1'><span>Pre-Book Sales</span> Before You Launch.</h1>
      <p className='c-1'>Test demand, reduce risk, launch with confidence — and start earning before the drop.</p>
      </div>
      <div className='b-2'>
      <img src={pre2} className='pre-2'/>
       <h1 className='g-2'>Get Featured on <span>Curated Lists.</span></h1>
       <p className='c-2'>Partner with influencers and style editors who feature your product in themed
collections. More clicks, more buzz.</p>
      </div>
      <div className='b-3'>
      <img src={pre3} className='pre-3'/>
        <h1 className='g-3'>Promote Without Paying. <span>Sell Without Guessing.</span></h1>
        <p className='c-3'>Our AI handles smart promotions that feel human — not spammy.</p>
      </div>
      </div>
      <div className='r-1'>
        <h1 className='l-1'><span>No More Hustling </span>for Likes on Social Media.</h1>
        <p className='p-30'>Stay visible even when you’re offline. We’ll help your brand shine without chasing trends or algorithms</p>
      </div>
      <div className='r-2'>
        <h1 className='l-2'><span>Build Loyalty Beyond </span>the First Sale.</h1>
        <p className='p-31'>Our AI nurtures personalized relationships — driving repeat purchases and stronger brand love.</p>
      </div>
      <div>
      <img src={growth} alt="Growth" className='growth'/>
      </div>
    </div>   
  )
}

export default Why;