import React from 'react';
import './collection-item.scss';

const CollectionItem = (props)=>{
    return (
        <div className="item-collection">
            <div className="hover-container flex-container container">
                <div className="buttons-hover flex-container container">
                    <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                    <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                    <div><button className="button-hover"><i className="far fa-heart"></i></button></div>
                </div>
            </div>
            
            <div className="card-content">
                <h2>Corona chair</h2>
                <p className="item-description">Printed evening dress with straight sleeves</p>
                <p className="price">$14.86</p>
            </div>
        </div>
    );
}

export default CollectionItem