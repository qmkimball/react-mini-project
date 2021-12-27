import React, { Component } from 'react';

export default class Resizer extends Component {
    constructor() {
        super()
        this.state = {            
            paragraph:'12',
            increment: '2'

        }
        
       this.handleChange = this.handleChange.bind(this);
       this.handleTextSizeIncrease = this.handleTextSizeIncrease.bind(this);
       this.handleTextSizeDecrease = this.handleTextSizeDecrease.bind(this)
    }
    handleChange(event) {
        this.setState({
            increment: event.target.value,
        });
    }

    
    handleTextSizeIncrease(){
        for (let i = this.state.paragraph; i < 32; i++) {
            this.setState({
                paragraph: this.state.paragraph + parseInt(this.state.increment),
            });
        }
    }

    handleTextSizeDecrease(){
        for (let i = this.state.paragraph; i > 6; i-- ) {
            this.setState({
                paragraph: this.state.paragraph + parseInt(this.state.increment),
            });
        }
    }
    
    
    render() {
        return(
            <div className="section">
                <div className="resizer">
                    <p>Change the size of the text below.</p>
                    <p style={{ fontSize: this.state.paragraph }}>{this.state.paragraph}px</p>
                    <input
                        type="number"
                        placeholder="Increment by ..."
                        onChange={this.handleChange}
                    />
                </div>

                    
                    
                    <div className="btn-wrapper">
                        <button onClick={this.handleTextSizeIncrease}>Bigger!</button>
                        <button onClick={this.handleTextSizeDecrease}>Smaller!</button>
                    </div>
            </div>
        )
    }
}