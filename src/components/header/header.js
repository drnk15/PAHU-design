import React from 'react';
import './header.scss';
import Logo from './Logo.png';

function Header() {
    return (
            <header>
                <div className="container flex-container">
                    <div className="logo-header">
                        <img src={Logo} id="site-logo" alt="logo" />
                    </div>
                    <div className="header-nav">
                        <a href="#" target="_blank" className="nav-link home-link">Home</a>
                        <a href="#" target="_blank" className="nav-link">Features</a>
                        <a href="#" target="_blank" className="nav-link">Shop</a>
                        <a href="#" target="_blank" className="nav-link">Blog</a>
                        <a href="#" target="_blank" className="nav-link">Accesories</a>
                        <a href="#" target="_blank" className="nav-link">Contact</a>
                    </div>
                    <div className="buttons-header flex-container">
                        <button className="header-button"><i className="fas fa-search"></i></button>
                        <button className="header-button"><i className="far fa-heart"></i></button>
                        <button className="header-button"><i className="fas fa-shopping-cart"></i><p id="number-of-items">0</p></button>
                    </div>
                </div>
            </header>
    );
}

export default Header;