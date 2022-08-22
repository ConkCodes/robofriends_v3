import './Card.css';
import React from 'react';

const Card = (props) => {

    return(
        <div className="card">
            <img  
                src={"https://robohash.org/" + props.id}
                alt="" 
                width="250" 
                height="250"
            />
            <h2 className="name">{props.name}</h2>
            <p className="email">{props.email}</p>
        </div>
    );

}

export default Card;