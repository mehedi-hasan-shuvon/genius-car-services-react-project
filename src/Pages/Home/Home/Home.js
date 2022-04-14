import React from 'react';
import Services from '../Services/Services';
import './Home.css'
import repaire1 from '../../../Images/repaire1.png';

const services = [
    { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/vhqZbWh/repaire1.png' },
]

const Home = () => {
    return (
        <div>
            <Services></Services>
        </div>
    );
};

export default Home;