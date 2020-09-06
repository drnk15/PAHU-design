import React from 'react';
import './slider-arrows.scss';
import {ReactComponent as ArrowLeft} from '../../svg/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../svg/arrow-right.svg';

const SliderArrows = (props)=>{
    return (
        <div className={props.className + " slider-arrows"}>
            <ArrowLeft className="arrow left" />
            <ArrowRight className="arrow right" />
        </div>
    );
}

export default SliderArrows