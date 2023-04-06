import React from 'react';
import FoodForEveryone from './FoodForEveryone';
import Login from './Login';
import FoodForYou from './FoodForYou';
import NotHistoryYet from './NotHistoryYet';
import NoOrderYet from './NoOrderYet';
import NoInternetConnection from './NoInternetConnection';
import ItemNotFound from './ItemNotFound';
import MyOffers from './MyOffers';
import FoundSixResults from './FoundSixResults';
import MyProfile from './MyProfile';
import VeggieTomatoMix from './VeggieTomatoMix';
import Delivery from './Delivery';
import Payment from './Payment';
import Cart from './Cart';
import MyProfile2 from './MyProfile2';
import Navbar from './Navbar';

const AllPage = () => {
    return (
        <div className=''>
      <Navbar/>
      <FoodForEveryone/>
      <Login/>
      <FoodForYou/>
      <NotHistoryYet/>
      <NoOrderYet/>
      <NoInternetConnection/>
      <ItemNotFound/>
      <MyOffers/>
      <FoundSixResults/>
      <MyProfile/>
      <VeggieTomatoMix/>
      <Delivery/>
      <Payment/>
      <Cart/>
      <MyProfile2/>
        </div>
    );
};

export default AllPage;