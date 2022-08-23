import './App.css';
import React from 'react';
import Search from '../Components/Search.js';
import CardList from "../Components/CardList.js";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            input: ""
        };
    }

    async componentDidMount() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const robots = await res.json();
        this.setState({robots: robots});
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
