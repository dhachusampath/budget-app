import React from 'react';
import IconItem from './IconItem';
import './IconList.css';
const IconList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h1>No icons found...</h1>
      </div>
    );
  }

  return (
    <ul className='icon-list'>
      {props.items.map((icon) => (
        <IconItem
          key={icon.id}
          id={icon.id}
          icon={icon.icon}
          description={icon.description}
        />
      ))}
    </ul>
  );
};

export default IconList;
