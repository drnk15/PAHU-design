import React from 'react';
import './first-screen.scss';
import {ReactComponent as ArrowLeft} from '../../svg/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../svg/arrow-right.svg';

export default function FirstScreen() {
    return (
        <section className="first-screen">
            <div className="container">
                <div className="svg-container">
                    <ArrowLeft className="arrow left" />
                    <ArrowRight className="arrow right" />
                </div>
                <div className="first-screen-empty-squares">
                    <div className="squares-empty-div"></div>
                    <div className="squares">
                        <div className="square empty"></div>
                        <div className="square"></div>
                        <div className="square empty"></div>
                        <div className="square"></div>
                        <div className="square empty"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square empty"></div>
                        <div className="square"></div>
                        <div className="square empty"></div>
                        <div className="square"></div>
                        <div className="square empty"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square empty"></div>
                        <div className="square"></div>
                        <div className="square empty"></div>
                        <div className="square"></div>
                        <div className="square empty"></div>
                    </div>
                </div>
                <div className="first-screen-content">
                    <div className="empty-div"></div>
                    <div className="first-screen-text">
                        <h1>
                            <span>
                            </span>Welcome To <span>Pahu Design</span>
                        </h1>
                        <h2>You are in good hand with us</h2>
                    </div>
                    <div className="empty-div"></div>
                </div>
            </div>
        </section>
    )
}