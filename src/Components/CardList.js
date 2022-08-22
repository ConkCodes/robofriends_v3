import './CardList.css';
import React from 'react';
import Card from './Card.js';
import {robots} from '../robots.js';

const CardList = (props) => {

    const cardList = robots.map(robot => {
        return (
            <Card 
                name={robot.name}
                email={robot.email}
            />
        );
    });
    

    return(
        <div className="cardList">
            {cardList}
        </div>
    );

}

export default CardList;