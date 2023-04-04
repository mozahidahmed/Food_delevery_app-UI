import React from 'react';
import Banner from './Banner';
import MobileApp from './MobileApp';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Banner2 from './Banner2';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner />
            <MobileApp />
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Banner2 />
            <Footer/>
        </div>
    );
};

export default Home;