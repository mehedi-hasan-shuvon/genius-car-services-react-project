import React from 'react';
import Services from '../Services/Services';
import './Home.css'
import repaire1 from '../../../Images/repaire1.png';
import Experts from '../Experts/Experts';
import Banner from '../Banner/Banner';
import PageTitle from '../../Shared/PageTitle/PageTitle';


const services = [
    { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/vhqZbWh/repaire1.png' },
]

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;