import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    const handelRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
    }
    return (
        <div className='Register-form'>
            <h2 className='text-center text-primary mt-4'>Please Register</h2>
            <form onSubmit={handelRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Your email Address' required />
                <input type="password" name="password" id="" placeholder='your password' required />
                <input type="submit" value="Register" />
            </form>
            <p>All ready have an Account? <Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none pe-auto'>Please Login</Link></p>
        </div>
    );
};

export default Register;