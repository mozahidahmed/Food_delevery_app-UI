import React from 'react';
import Banner from './Banner';
import MobileApp from './MobileApp';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Banner2 from './Banner2';

const Home = () => {
    return (
        <div>
           <Banner/>
           <MobileApp/>
           <Hero1/>
           <Hero2/>
           <Hero3/>
           <Banner2/>
        </div>
    );
};

export default Home;