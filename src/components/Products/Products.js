import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = ({ product, addToCart }) => {
    const { id, name, img, price, company } = product;

    return (
        <div className='product-container'>
            <div className="card-img-section">
                <img src={img} alt="My Images" />
            </div>
            <div className="card-info">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Brand: {company}</p>
            </div>
            <div>
                <button onClick={() => addToCart(product)} className='add-to-cart-btn'><p>Add To Cart</p> <FontAwesomeIcon icon={faShoppingCart} /> </button>
            </div>
        </div>
    );
};

export default Products;