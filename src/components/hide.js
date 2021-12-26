import React, { Component } from 'react';

export default class Hide extends Component {
    constructor() {
        super()
        
        this.state = {
            display: "block",
            buttonText: "Hide"
        }

        this.handleButtonHider = this.handleButtonHider.bind(this)

    }

    handleButtonHider() {
        if (this.state.display === "block") {
            this.setState({
                display: "none",
                buttonText: "Show"
            })
        } else {
            this.setState({
                display: "block",
                buttonText: "Hide"
            })
        }
    }

    render() {
        return(
            <div className="section">
                <p style={{display: this.state.display}}>Hide me!</p>

                <div className="btn-wrapper">
                    <button onClick={this.handleButtonHider}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

