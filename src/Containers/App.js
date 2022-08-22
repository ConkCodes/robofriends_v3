import './App.css';
import React from 'react';
import CardList from "../Components/CardList.js";

class App extends React.Component {

    constructor() {

        super();
        this.state = {input: ""};

    }

    render() {

        return(

            <div className="app">   
                <CardList/>
            </div>

        );

    }

}

export default App;
