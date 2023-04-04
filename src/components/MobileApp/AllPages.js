import React from 'react';
import FoodForEveryone from './FoodForEveryone';
import Login from './Login';
import FoodForYou from './FoodForYou';
import NotHistoryYet from './NotHistoryYet';
import NoOrderYet from './NoOrderYet';
import NoInternetConnection from './NoInternetConnection';
import ItemNotFound from './ItemNotFound';
import MyOffers from './MyOffers';

const AllPage = () => {
    return (
        <div>
      <FoodForEveryone/>
      <Login/>
      <FoodForYou/>
      <NotHistoryYet/>
      <NoOrderYet/>
      <NoInternetConnection/>
      <ItemNotFound/>
      <MyOffers/>
        </div>
    );
};

export default AllPage;