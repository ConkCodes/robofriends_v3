import './Card.css';
import React from 'react';

const Card = () => {

    return(
        <div className="card">
            <img  
                src="https://robohash.org/test" 
                alt="" 
                width="250" 
                height="250"
            />
            <h2 className="name">First Last</h2>
            <p className="email">email@gmail.com</p>
        </div>
    );

}

export default Card;