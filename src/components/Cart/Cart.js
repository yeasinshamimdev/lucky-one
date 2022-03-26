import React from 'react';
import './Cart.css';
import SingleProduct from './SingleProduct/SingleProduct';

const Cart = ({ cart, removeFormCart, selectOneFormCart, resetBtn }) => {

    return (
        <div className='cart-container-div'>
            <div className='cart-content'>
                <h2>Your Selected Laptops</h2>

                <div className="selected-cart-list">
                    {
                        cart?.map(pd => <SingleProduct key={pd.id} singleProduct={pd} removeFormCart={removeFormCart} />)
                    }
                </div>

                <div className='cart-btn-div'>
                    <button onClick={selectOneFormCart} className='select-for-me-btn'>Select 1 For You</button>
                    <button onClick={resetBtn}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;