import React from 'react';
import './Module2.css';
const human = require('../../page-1/images-1/human.jpg');
const wave = require('../../page-1/images-1/wave.jpg');
const Module2 = ()=>{
return(
  <div className='module-2'>
   <img src={human} alt="human" className='human'/>
   <p className='p3'>And if you’re a seller, we’ve got your back too! BuyDost brings you -- Guaranteed visibility. Real feedback. Real community. No more chasing the algorithm. Just focus on creating — and we’ll help you get discovered.</p>
    <img src={wave} alt="wave" className='wave'/>
       <h1 className='header-2'><span>BuyDost</span> is our way to saying:</h1>
        <p className='p4'> Shopping should feel like catching up with a friend. And for the first time in a long time — it does.</p>
  </div>
)
}
export default Module2;