import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // products
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // cart
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const setEventHandle = product => {
        const newCart = [...cart, product];
        setCart(newCart);

        // add to local storage
        addToDb(product.id);
    }

    return (
        <div className="row">
            <div className="col-10">
                <div className="products-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product =>
                            <Product
                                product={product}
                                key={product.id}
                                setEventHandle={setEventHandle}
                            >
                            </Product>)
                    }
                </div>
            </div>
            <div className="col-2 cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;