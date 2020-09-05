import React from 'react';
import './blog-post.scss';
import {ReactComponent as ButtonArrow} from './blog-post-button-arrow.svg';

const BlogPost = (props)=>{
    return (
        <div className="blog-post">
            <img src={props.image} />
            <div className="blog-post-text">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <a href={props.link} target="_blank">
                    Read more
                    <ButtonArrow />
                </a>
            </div>
        </div>
    );
}

export default BlogPost