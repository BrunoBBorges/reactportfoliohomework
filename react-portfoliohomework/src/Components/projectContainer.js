import React from 'react';


function Projectcontainer (props) {
    return(
        <div>
            <div className="image-wrapper">
                <img src={props.image}></img>
            </div>
            <div className="project-content">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <p>{props.githublink}</p>
            </div>
        </div>
    );
}

export default Projectcontainer;