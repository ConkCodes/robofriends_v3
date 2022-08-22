import './CardList.css';
import React from 'react';
import Card from './Card.js';

const CardList = () => {

    let cardList = [];
    for (let i = 0; i < 15; i++) cardList.push(<Card/>);

    return(
        <div className="cardList">
            {cardList}
        </div>
    );

}

export default CardList;