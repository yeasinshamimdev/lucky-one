import React from 'react';
import './Products.css';

const Products = ({ product }) => {
    const { id, name, img, price, company } = product;
    console.log(name);
    return (
        <div>
            <h1>This is products</h1>
        </div>
    );
};

export default Products;