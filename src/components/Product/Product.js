import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: {price}</p>
                    <p>Seller: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <div className="card-footer">
                    <div className="d-grid">
                        <button onClick={() => props.setEventHandle(props.product)} className="btn mormo-btn" type="button">Add to Cart
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;