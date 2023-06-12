import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;

    for (const product of Object.entries(cart)) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total - tax;

    return (
        <div className='cart'>
            <h4 className='cart-header'>Order Summary</h4>
            <p className='para'>Selected Items: {cart}</p>
            <p className='para'>Total: {total}</p>
            <p className='para'>Tax: {tax}</p>
            <h4>Grand Total: {grandTotal}</h4>
        </div>
    )
}

export default Cart;