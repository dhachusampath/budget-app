import React from 'react';
import './DetailsItem.css';

const DetailsItem = (props) => {
  return (
    <li className="details-card">
      <div className="icon-placeholder">
        <img src={props.icon} alt="icon" className="details-img" />
      </div>
      <p className="hint">{props.hint}</p>
      <p className="full">{props.full}</p>
      <h3 className="tag">{props.tag}</h3>
    </li>
  );
};

export default DetailsItem;
