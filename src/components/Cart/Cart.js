import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart-container-div'>
            <div className='cart-content'>
                <h2>Your Selected Laptops</h2>
                <div className='cart-btn-div'>
                    <button className='select-for-me-btn'>Select 1 for me</button>
                    <button>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;