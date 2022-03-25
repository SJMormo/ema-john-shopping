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

    const setEventHandle = selectedProduct => {
        //check quantity in the cart
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }

        // add to cart
        setCart(newCart);

        // add to local storage
        addToDb(selectedProduct.id);
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