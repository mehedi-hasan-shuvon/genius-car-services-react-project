import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Chekout.css';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
const Chekout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // console.log(service);

    // const [user, setUser] = useState({
    //     name: 'akbar the great',
    //     email: 'akbar@gmail.com',
    //     address: 'tajmohol road md.pur',
    //     phone: '017777777'
    // });

    // const handelAddressChange = (event) => {
    //     // console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     // console.log(newUser);
    //     setUser(newUser);
    // }
    const handelPlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://nameless-peak-83594.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    };


    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Please order:{service.name}</h2>
            <form onSubmit={handelPlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place order" />

            </form>

        </div>
    );
};

export default Chekout;