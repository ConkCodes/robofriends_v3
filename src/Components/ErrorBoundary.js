import './ErrorBoundary.css';
import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);   
        this.state = {
            error: false
        }
    }

    componentDidCatch() {
        this.setState({error: true});
    }

    render() {
        if (this.state.error === true) {
            return <h1 className="title2">An error has occurred...</h1>
        } else {
            return this.props.children
        }
    }

}

export default ErrorBoundary;