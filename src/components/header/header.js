import React from 'react';
import './header.scss';
import PahuLogo from '../pahu-logo/pahu-logo.js';
import ActionsIcons from '../actions-icons/actions-icons';

function Header() {
    return (
            <header>
                <div className="container flex-container">
                    <PahuLogo />
                    <div className="header-nav">
                        <a href="#" target="_blank" className="nav-link home-link">Home</a>
                        <a href="#" target="_blank" className="nav-link">Features</a>
                        <a href="#" target="_blank" className="nav-link">Shop</a>
                        <a href="#" target="_blank" className="nav-link">Blog</a>
                        <a href="#" target="_blank" className="nav-link">Accesories</a>
                        <a href="#" target="_blank" className="nav-link">Contact</a>
                    </div>
                    <ActionsIcons />
                </div>
            </header>
    );
}

export default Header;