import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import './Chekout.css';
const Chekout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    // console.log(service);

    const [user, setUser] = useState({
        name: 'akbar the great',
        email: 'akbar@gmail.com',
        address: 'tajmohol road md.pur',
        phone: '017777777'
    });

    const handelAddressChange = (event) => {
        // console.log(event.target.value);
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        // console.log(newUser);
        setUser(newUser);
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Please order:{service.name}</h2>
            <form >
                <input className='w-100 mb-2' type="text" value={user.name} name="name" placeholder='name' required />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" placeholder='email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" onChange={handelAddressChange} value={user.address} name="address" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place order" />

            </form>

        </div>
    );
};

export default Chekout;