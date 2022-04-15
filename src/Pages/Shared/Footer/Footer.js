import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center my-3'>
            <p><small>copyright @ {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;