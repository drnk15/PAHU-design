import React from 'react';
import './actions-icons.scss';

const ActionsIcons = ()=>{
    return (
        <div className="actions-icons">
            <button className="action-button"><i className="fas fa-search"></i></button>
            <button className="action-button"><i className="far fa-heart"></i></button>
            <button className="action-button"><i className="fas fa-shopping-cart"></i><p id="number-of-items">0</p></button>
        </div>
    );
}

export default ActionsIcons