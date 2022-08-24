import './App.css';
import React from 'react';
import Search from '../components/Search.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import CardList from "../components/CardList.js";

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
        if (this.state.robots.length === 0) {
            return (
                <h1 className="title">Loading...</h1>
            );
        }
        else {
            return(
                <div>
                    <h1 className="title">RoboFriends</h1>
                    <Search onInput={this.onInput}/>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </div>
            );
        }
    }

}

export default App;
