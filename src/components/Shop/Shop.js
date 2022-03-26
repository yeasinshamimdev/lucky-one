import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const addToCart = (productID) => {
        console.log('clicked', productID);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products?.map(product => <Products key={product.id} product={product} addToCart={addToCart} />)
                }
            </div>
            <div className="cart-container">
                <Cart />
            </div>
        </div>
    );
};

export default Shop;