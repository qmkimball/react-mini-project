import React, { Component } from 'react';

export default class Align extends Component {
    constructor () {
        super()


        this.state = {
            alignment: "center"
        }

        this.handleAlignLeft = this.handleAlignLeft.bind(this)
        this.handleAlignCenter = this.handleAlignCenter.bind(this)
        this.handleAlignRight = this.handleAlignRight.bind(this)
    }

    handleAlignLeft() {
        this.setState({ 
            alignment: "left"
        })
    }

    handleAlignCenter() {
        this.setState({
            alignment: "center"
        })
    }

    handleAlignRight() {
        this.setState({
            alignment: "right"
        })
    }

    render() {
        return(
        <div className="section">
            <div className="align">
                <p style={{textAlign: this.state.alignment }}>Align Me</p>

                <div className="btn-wrapper">
                
                <button onClick= {this.handleAlignLeft} >Left</button>

                <button onClick={this.handleAlignCenter}>Center</button>
                
                <button onClick={this.handleAlignRight}>Right</button>
                </div>

            </div>
        </div>

        )
    }
}
