import React from 'react';
import Logo from './Logo.png';
import './pahu-logo.scss';

const PahuLogo = ()=>{
    return (
        <div className="logo">
            <img src={Logo} id="site-logo" alt="logo" />
        </div>
    );
}

export default PahuLogo