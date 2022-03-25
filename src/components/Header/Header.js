import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className='nav-container'>
                <div className='nav-title'>
                    <h1 className='header-title'>Laptop Mart</h1>
                </div>
                <div className='nav-items'>
                    <a href="#home">Store</a>
                    <a href="#cart">Cart</a>
                    <a href="#about">About us</a>
                </div>
            </div>
            <div className='header-info'>
                <h1>Welcome To My Laptop Mart</h1>
                <h2>You Can't Add Product More Than Four!</h2>
            </div>
            <hr />
        </div>
    );
};

export default Header;