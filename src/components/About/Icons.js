import React from 'react';
import { FaShoppingBag, FaWeixin, FaRobot, FaSmile } from 'react-icons/fa';
import IconList from './IconList';

const ICONS = [
  {
    id: "i1",
    icon: <FaShoppingBag />,
    description: "A place where shopping is fun again"
  },
  {
    id: "i2",
    icon: <FaWeixin />,
    description: "Where you can chat, swipe, laugh, and discover—all in one app"
  },
  {
    id: "i3",
    icon: <FaRobot />,
    description: "Where AI (your Friendly Dost) helps you find the perfect gift"
  },
  {
    id: "i4",
    icon: <FaSmile />,
    description: "And your besties can help you decide what to buy (or talk you out of it!)"
  }
];

const Icons = () => {
  return (
    <IconList items={ICONS} />
  );
};

export default Icons;
