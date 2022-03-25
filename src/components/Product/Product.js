import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p>Price: {price}</p>
                    <p>Seller: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <div class="card-footer d-grid">
                    <button class="btn mormo-btn" type="button">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Product;