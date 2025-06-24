import React from 'react';
import './InfinityModule.css';
import infinity from './images-1/infinity.png'
import col from './columns/col-1.png';
import col2 from './columns/col-2.png';
import col3 from './columns/col-3.png';
import col4 from './columns/col-4.png';
import col5 from './columns/col-5.png';
import col6 from './columns/col-6.png';
import inf1 from '../desgn/d-1.png';
import inf2 from'../desgn/Group.png';
import inf3 from '../desgn/d-3.png';
import inf4 from '../desgn/d-4.png';
import inf5 from '../desgn/d-5.png';
import inf6 from '../desgn/d-6.png';
const InfinityModule = () => {
  return (
    <div className="inf-1">
     <img src={infinity} className='inf' alt="inf"/>
     <div className='sm'>
     <div className='rec'>
      <img src={col} className='col-1'/>
      <img src={col2} className='col-2'/>
      <img src={col3} className='col-3'/>
      <img src={col4} className='col-4'/>
      <img src={col5} className='col-5'/>
      <img src={col6} className='col-6'/>
      </div>
      <div className='clms'>
       <img src={inf1} alt="Inf-1"/>
        <img src={inf2} alt="Inf-2"/>
        <img src={inf3} alt="Inf-3"/>
        </div>
        <div className='clms-2'>
        <img src={inf4} alt="Inf-4"  className='in'/>
        <img src={inf5} alt="Inf-5"/>
        <img src={inf6} alt="Inf-6"/>
      </div>
  </div>
  </div>
  )
};

export default InfinityModule;
