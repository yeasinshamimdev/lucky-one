import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import './SingleProduct.css';

const SingleProduct = ({ singleProduct, removeFormCart }) => {
    const { img, name } = singleProduct;
    return (
        <div className='single-product-container'>
            <div className='single-product-content'>
                <img src={img} alt="my images" />
                <h4>{name}</h4>
                <div className='single-product-remove'>
                    <button onClick={() => removeFormCart(singleProduct)}><FontAwesomeIcon icon={faRemove} /> </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;