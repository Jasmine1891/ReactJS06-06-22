import React from 'react';
import './counter.css';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
        this.decClick = this.decClick.bind();
        this.incClick = this.incClick.bind();
    }
    incClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    decClick = () => {
        this.setState({ counter: this.state.counter - 1 });
    }
    render() {
        return (
            <div className='container' align='center'>
                <h1>Counter</h1>
                <div className="buttons">
                    <h2 className={(this.state.counter<=5?"text-danger":"text-success")}>{this.state.counter}</h2>
                    <button className="incButton" onClick={this.incClick}>Increment</button>
                    <button className="decButton" onClick={this.decClick}>Decrement</button>
                                       
                </div>
            </div>
        );
    }
}
export default Counter;