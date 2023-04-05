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

const AllPage = () => {
    return (
        <div className=''>
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
        </div>
    );
};

export default AllPage;