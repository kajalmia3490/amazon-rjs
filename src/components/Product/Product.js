import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, clickAddToCart }) => {
    // const {product, clickAddToCart} = props
    const { name, seller, price, img, ratings } = product
    return (

        <div className='products'>
            <img src={img} alt='...' />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p> Price: ${price} </p>
                <p><smaill>Manufacturer: {seller} </smaill></p>
                <p><smaill>Ratings: {ratings} Stars</smaill></p>
            </div>
            <button
                onClick={() => clickAddToCart(product)}
                className='btn-cart'>
                <label className='btn-text'>Add to Cart</label>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;