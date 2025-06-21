import React from 'react';
import DetailsItem from './DetailsItem';
import './DetailsList.css';

const DetailsList = (props) => {
  if (!props.items || props.items.length === 0) {
    return <h1>No details found...</h1>;
  }

  return (
    <ul className="details-list">
      {props.items.map((detail) => (
        <DetailsItem
          key={detail.id}
          icon={detail.icon}
          hint={detail.hint}
          full={detail.full}
          tag={detail.tag}
        />
      ))}
    </ul>
  );
};

export default DetailsList;
