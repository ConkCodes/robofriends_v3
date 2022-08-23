import './CardList.css';
import React from 'react';
import Card from './Card.js';

const CardList = (props) => {
    const cardList = props.robots.map(robot => {
        return (
            <Card 
                key={robot.id}
                id={robot.id}
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