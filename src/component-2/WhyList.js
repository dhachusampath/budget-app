import React from 'react';
import WhyItem from './WhyItem';
import './WhyList.css';

const WhyList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h1>No Details</h1>
      </div>
    );
  }

  return (
    <ul className='list-cont'>
      {props.items.map((list) => (
        <WhyItem
          key={list.id} // ✅ Always add a key
          image={list.image}
          topic={list.topic}
          paragraph={list.paragraph}
        />
      ))}
    </ul>
  );
};

export default WhyList;
