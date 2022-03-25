import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container row">
            <div className="col-10">
                <div className="products-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product =>
                            <Product
                                product={product}
                                key={product.id}
                            >
                            </Product>)
                    }
                </div>
            </div>
            <div className="col-2 cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;