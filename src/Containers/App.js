import './App.css';
import React from 'react';
import Search from '../Components/Search.js';
import CardList from "../Components/CardList.js";
import {robots} from '../robots.js';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            input: ""
        };
    }

    onInput = (event) => {
        this.setState({input: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.input.toLowerCase());
        });
        return(
            <div className="app">
                <h1 className="title">RoboFriends</h1>
                <Search onInput={this.onInput}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }

}

export default App;
