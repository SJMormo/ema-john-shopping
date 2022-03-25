import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for (const item of cart) {
        totalPrice += item.price;
        totalShipping += item.shipping;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart mt-5 pt-5">

            <h3>Order Summery</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: {grandTotal}</h3>
        </div>
    );
};

export default Cart;