import React from 'react';
import './NotFound.css';
import sleepy from '../../../Images/sleepy.jpg'
const NotFound = () => {
    return (
        <div className='text-center mx-auto'>
            <h2 className='text-center text-danger'>Mechanic is sleeping</h2>
            <img className='w-75 mx-auto' src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;