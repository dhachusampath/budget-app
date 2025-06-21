import React from 'react';
import './Spark.css';
const Emo = require('./sparks/emoji.png');
const Partner = require('./sparks/partner.png')
const Auth = require('./sparks/Auth.png');
const respect = require('./sparks/respect.png')
const kindness = require('./sparks/kindness.png');
const Eclipse = require('../../page-1/images-1/Ellipse.png');
const Way = require('./sparks/SPARK WAY.png')
const Graph = require('./sparks/circle.png');
const Con1 = require('../../cnts/content-1.png');
const Con2 = require('../../cnts/content-2.png');
const Con3 = require('../../cnts/content-3.png');
const Con4 = require('../../cnts/content-4.png');
const Con5 = require('../../cnts/content-5.png');

const Spark = () =>{


  return(
   
    <div className='sphere'>
    
    <div className='spark'>
 
     <h1 className='h20'>SPARK</h1>
     <img src={Graph} alt="Graph" className='graph'/>
    </div>
      <img src={Eclipse} alt="eclipse" className='eclipse'/>
      
    <div className='sparks'>

    <div className='im'>
    <ul className='lu'>
    
     <li className='li'><img src={Emo} className='emo'/></li>
          <li className='li'><img src={Partner} className='partner'/></li>
               <li className='li'><img src={Auth} className='auth'/></li>
                    <li className='li'><img src={respect} className='respect'/></li>
                         <li className='li'><img src={kindness} className='kindness'/></li>
    </ul>
    </div>

    <div className='define'>
      <ul className='main'>
       <li className='ctn-1'>
       <img src={Con1} className='content-1'/>
       </li>
      <li className='ctn-1'>
      <img src={Con2} className='content-2'/>
      </li>
     <li className='ctn-1'>
     <img src={Con3} className='content-3'/>
     </li>
      <li className='ctn-1'>
      <img src={Con4} className='content-4'/>
      </li>
       <li className='ctn-1'>
       <img src={Con5} className='content-5'/>
       </li>

      </ul>
    </div>
    </div>
    <img src={Way} className='way'/>
    </div>
    
  )
}

export default Spark;  