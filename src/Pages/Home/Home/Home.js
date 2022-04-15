import React from 'react';
import Services from '../Services/Services';
import './Home.css'
import repaire1 from '../../../Images/repaire1.png';
import Experts from '../Experts/Experts';
import Banner from '../Banner/Banner';

const services = [
    { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/vhqZbWh/repaire1.png' },
]

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;