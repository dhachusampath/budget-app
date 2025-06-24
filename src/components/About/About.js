import React from 'react';
import './About.css';
import Module2 from './Module-2/Module2';
import Icons from './Icons';
import Spark from './Module-2/Spark';
const Men = require('../page-1/images-1/Men.jpg');
const Img = require('../page-1/images-1/image.jpg');


const About =() =>{

  return(
    <div className='rt'>

     <h1
     className='heads'>The <span>BuyDost</span> Story</h1>
     <div className='story'>
     
      <h1 className='start'>We didn't start with a business plan.
      We started with a problem</h1>
      <div className='ge'>
        <img src={Men} alt="Men" className='men'/>
      <p className='gra'>
      Online shopping was supposed to be easy. Fun. Personal. 
      But somewhere along the way, it turned into a noisy, 
      overwhelming scroll-fest. 
      You'd spend hours browsing the same products.
       Forget birthdays. Miss deals. Shop alone, second-guessing every decision — while 10 tabs stayed open and no one helped. Before the internet, shopping wasn’t like this.
      </p>
          </div>
     </div>
     <div>
     <img src={Img} alt="mod" className='mod-2'/>
     <p className='para-3'>It was an event — something you did with your mom, your siblings, your friends. You’d try things on, get instant feedback, laugh over mismatched outfits, bump into neighbors, discover new stores, and stop for a snack on the way back. Shopping was personal, memorable, and social — not just a transaction</p>
     </div>
     <div>
     <h1 className='h6'>So, we built <span>BuyDost</span>
     __ to bring back what we lost,but the way fits
     </h1>
     </div>
     <div>
     <Icons />
      <Module2 />
     </div>
       <div className='container'>
         <div className='phase-1'>
          <h1 className='head-3'>Our Mission</h1>
          <p className='p5'>To transform online shopping into a joyful, social and personalized experience__
             while empowering sellers with data-driven visibility,reach,and loyalty
          </p>
         </div>
         <div className='phase-2'>
           <h1 className='head-4'>Our Vision</h1>
           <p className='p5'>To build the world’s most intuitive and human-centered shopping platform where every product finds its right buyer, and every shopper feels understood,
       connected, and confident.</p>
         </div>
       </div>
       <div>
       <h1 className='head-5'>Our Core Values:<span> The SPARK Way</span></h1>
       <p className='p6'>At BuyDost, SPARK isn’t just letters — it’s the vibe that makes us shine:</p>
       </div>
       <Spark />
    </div>

  )
}

export default About;