import React from 'react';
import './Products.css';

const Products = ({ product }) => {
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
        </div>
    );
};

export default Products;