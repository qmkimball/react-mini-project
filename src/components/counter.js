import React, { Component } from 'react';


export default class Counter extends Component {
    constructor() {
        super()

        this.state = {
            clicks: 0,
            show: true
        };
        this.increaseNumber = this.increaseNumber.bind(this)
        this.decreaseNumber = this.decreaseNumber.bind(this)
    }

    increaseNumber() {
        this.setState({ clicks: this.state.clicks + 1});
    }

    decreaseNumber() {
        this.setState({ clicks: this.state.clicks - 1});
    }

    toggleClick() {
        this.setState({ show: !this.state.show });
    }

    

    render() {
        return(
            <div className="section">
                <p>Change this number</p>
                
                {this.state.show ? <h2>{this.state.clicks}</h2> : ''}

                <div className="btn-wrapper">
                    <button onClick={this.increaseNumber}>Add 1</button>
                    <button onClick={this.decreaseNumber}>Subtract 1</button>
                    
                </div>

            </div>
        );
    }
}