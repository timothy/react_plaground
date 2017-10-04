import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {counter: 0};

    incrementCounter = (incVal) => {
        this.setState((preveState) => {
            return {
                counter: preveState.counter + incVal
            }
        })
    };

    render() {
        return (
            <div>
                <Button onClickFunction={this.incrementCounter} incrementValue={1}/>
                <Button onClickFunction={this.incrementCounter} incrementValue={5}/>
                <Button onClickFunction={this.incrementCounter} incrementValue={10}/>
                <Button onClickFunction={this.incrementCounter} incrementValue={100}/>
                <Result counter={this.state.counter}/>
            </div>
        );
    }
}

/*
 First simple component built
 */
class Button extends Component {

    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    };

    render() {
        return (
            <button onClick={this.handleClick} className="Test">
                +{this.props.incrementValue}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div className="Test">{props.counter}</div>
    );
};


export default App;