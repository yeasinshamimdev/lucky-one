import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    const addToCart = (singleProduct) => {
        if (cart.length <= 3) {
            const totalCart = cart?.find(singleCart => singleCart.id === singleProduct.id);
            if (!totalCart) {
                const cartProduct = products.find(product => product.id === singleProduct.id);
                const totalCartProduct = [...cart, cartProduct];
                setCart(totalCartProduct);
            }
            else {
                alert('Sorry, You can not add a product multi time!!!')
            }
        }
        else {
            alert('Sorry! You can not add more than four products!!');
        }
    }

    const removeFormCart = (singleID) => {
        const removedItems = cart.filter(removedItem => removedItem.id !== singleID.id);
        setCart(removedItems);
        console.log(removedItems);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products?.map(product => <Products key={product.id} product={product} addToCart={addToCart} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeFormCart={removeFormCart} />
            </div>
        </div>
    );
};

export default Shop;