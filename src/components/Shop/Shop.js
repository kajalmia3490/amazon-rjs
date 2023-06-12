import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    
    const clickAddToCart = (product) => {
        console.log('clicked', product);
        // cart.push(product);
        // console.log(cart)
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                    product={product}
                    clickAddToCart={clickAddToCart}
                    key={product.id} />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart.length} />
            </div>
        </div>
    )
};

export default Shop;