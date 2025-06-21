import React from 'react';
import WhyList from './WhyList';

import dost1 from '../component-2/Dost1.png';
import dost2 from '../component-2/Dost2.png';
import dost3 from '../component-2/Dost3.png';

const Why = [
  {
    id: 'w1',
    image: dost1,
    topic: "Every Swipe Tells a Story – We Make Sure You Hear It.",
    paragraph: "See how many viewed, liked, skipped — and why. Insights that actually help you grow.",
  },
  {
    id: 'w2',
    image: dost2,
    topic: "Every Swipe Tells a Story – We Make Sure You Hear It.",
    paragraph: "See how many viewed, liked, skipped — and why. Insights that actually help you grow.",
  },
  {
    id: 'w3',
    image: dost3,
    topic: "Every Swipe Tells a Story – We Make Sure You Hear It.",
    paragraph: "See how many viewed, liked, skipped — and why. Insights that actually help you grow.",
  }
];

const WhyDetails = () => {
  return <WhyList items={Why} />;
};

export default WhyDetails;
