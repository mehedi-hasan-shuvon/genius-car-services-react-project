import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';
const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center m-5'>Welcome to Details: {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout' >
                    <button className='btn-btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;