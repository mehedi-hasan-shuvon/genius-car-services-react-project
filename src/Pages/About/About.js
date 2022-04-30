import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

import './About.css';
import MyLocation from '../MyLocation/MyLocation'


const About = () => {

    return (
        <div className='text-center'>
            <PageTitle title="about"></PageTitle>
            <h2>this is about us</h2>
            <MyLocation></MyLocation>
        </div>
    );
};

export default About;