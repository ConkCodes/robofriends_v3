import './App.css';
import React from 'react';
import Search from '../Components/Search.js';
import CardList from "../Components/CardList.js";

class App extends React.Component {

    constructor() {
        super();
        this.state = {input: ""};
    }

    onInput = (event) => {
        this.setState({input: event.target.value});
        console.log(event.target.value);
    }

    render() {
        return(
            <div className="app">
                <h1>RoboFriends</h1>
                <Search onInput={this.onInput}/>
                <CardList input={this.state.input}/>
            </div>
        );
    }

}

export default App;
