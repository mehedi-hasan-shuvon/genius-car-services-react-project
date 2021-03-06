import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';
import useToken from '../../../hooks/useToken';


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const navigate = useNavigate();
    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('please enter your email address')
        }

    };

    const [token] = useToken(user);
    if (token) {
        navigate(from, { replace: true });
    }


    if (loading || sending) {
        return <Loading></Loading>
    }


    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    // if user is found
    if (user) {
        // navigate(from, { replace: true });
    }

    const handelSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        // const { data } = await axios.post('https://nameless-peak-83594.herokuapp.com/login', { email });
        // console.log(data);
        // localStorage.setItem('accessToken', data.accessToken);

    }


    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-primary text-center my-3'>Please Login</h2>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New To Genius Car? <span onClick={navigateRegister} className='text-danger register-please'>Please Register</span></p>
            <p>Forget Password? <span onClick={resetPassword} className='text-primary register-please'>Reset Password</span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;