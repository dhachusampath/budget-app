import React from 'react';
import './IconItem.css';
const IconItem = (props) => {
  return (
    <li className='list-content'>
      <div className='itemss'>
        <h1 className='header'>{props.icon}</h1>
        <p className='description'>{props.description}</p>
      </div>
    </li>
  );
};

export default IconItem;
