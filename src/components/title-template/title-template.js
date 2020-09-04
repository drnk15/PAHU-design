import React from 'react';
import './title-template.scss';
import {ReactComponent as Line} from './line.svg';
import {ReactComponent as CenterItem} from './center-item.svg';

const TitleTemplate = (props)=>{
    return (
        <div className={props.className + " section-title"}>
            <h2>{props.title}</h2>
            <p>
                <Line /><CenterItem /><Line />
            </p>
        </div>
    )
}

export default TitleTemplate