import React from 'react';
import Banner from './Banner';
import MobileApp from './MobileApp';
import ShopHero from './ShopHero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Banner2 from './Banner2';

const Home = () => {
    return (
        <div>
           <Banner/>
           <MobileApp/>
           <ShopHero/>
           <Hero2/>
           <Hero3/>
           <Banner2/>
        </div>
    );
};

export default Home;