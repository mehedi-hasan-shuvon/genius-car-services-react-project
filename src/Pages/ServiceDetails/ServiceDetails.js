import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import './ServiceDetails.css';
const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    // const [service, setService] = useState({});
    // useEffect(() => {
    //     const url = `https://nameless-peak-83594.herokuapp.com/service/${serviceId}`;

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setService(data));

    // }, []);
    return (
        <div>
            <h2 className='text-center m-5'>You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`} >
                    <button className='btn-btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;