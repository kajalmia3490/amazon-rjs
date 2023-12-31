import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt='...' />
                <div>
                    <a href='/shop'>Shop</a>
                    <a href='/order'>Orders</a>
                    <a href='/inventory'>Manage Inventory</a>
                    <a href='/about'>About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;