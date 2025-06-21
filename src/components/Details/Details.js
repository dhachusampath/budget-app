import React from 'react';
import DetailsList from './DetailsList';

import cartIcon from './assets/shopping-cart-add-02.png';
import bellIcon from './assets/notification-02.png';
import searchIcon from './assets/ai-search-02.png';
import diamondIcon from './assets/diamond-02.png';

const Det = [
  {
    id: 'd1',
    icon: cartIcon,
    hint: "Add To Cart? Let Your Squad Decide",
    full: "Did you know you can start a group chat within our app and let your besties help you choose (or change your mind)? Because shopping with your people just hits different.",
    tag: "#OnlyOnBuyDost"
  },
  {
    id: 'd2',
    icon: bellIcon,
    hint: "Set Shopping Reminders. Thank Yourself Later",
    full: "Never miss a big day. Set a reminder, get a nudge, and find the perfect gift — on time. Future-you will be soooo proud.",
    tag: "#OnlyOnBuyDost"
  },
  {
    id: 'd3',
    icon: searchIcon,
    hint: "Manifest It. We’ll Find It!",
    full: "Create your dream tags — like “Black Shirts under ₹500” or “Party wear on Sales” and we’ll alert you the moment it drops. Just tag it and watch the magic happen.",
    tag: "#OnlyOnBuyDost"
  },
  {
    id: 'd4',
    icon: diamondIcon,
    hint: "Early Birds Get The Best Deals.",
    full: "Did you know that you can pre-book products on BuyDost before they go live and unlock massive launch-time discounts. VIP treatment and bragging rights? You got it.",
    tag: "#OnlyOnBuyDost"
  }
];

const Details = () => {
  return <DetailsList items={Det} />;
};

export default Details;
