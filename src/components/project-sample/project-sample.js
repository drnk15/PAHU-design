import React from 'react';
import './project-sample.scss';

const ProjectSample = (props)=>{
    return (
        <div className="project" id={props.id}>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default ProjectSample