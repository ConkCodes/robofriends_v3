import './CardList.css';
import React from 'react';
import Card from './Card.js';
import {robots} from '../robots.js';

const CardList = (props) => {

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(props.input.toLowerCase());
    });

    const cardList = filteredRobots.map(robot => {
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