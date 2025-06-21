import React from 'react';
import './WhyItem.css';

const WhyItem = (props) => {
  return (
    <li className='content'>
      <div>
        <img src={props.image} alt="Why" className="why-image" />
        <h1 className='topic'>{props.topic}</h1>
        <p className='p-graph'>{props.paragraph}</p>
      </div>
    </li>
  );
};

export default WhyItem;
