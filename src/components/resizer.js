import React, { Component } from 'react';

export default class Resizer extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                id: '1',
                message: 'Make Me Bigger'
                }
            ],
            
            name:'',
            message: '',
            size: '2em'

        }
        
        this.sizeChanger = this.sizeChanger.bind(this)
    }

    sizeChanger() {
        if (this.state.size == '2em') {
            this.setState({
                size: '2.5em'
            });
        } else if (this.state.size == '2.5em') {
            this.setState({
                size: '3em'
            });
        } else {
            this.setState({
                size: '3.5em'
            });
        }
    }
    
    render() {
        return(
            <div className="section">
                <p>Change the size of the text below.</p>

                <div className="messageDiv">
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li 
                                    style={{ size: this.state.size }}
                                >
                                    {item.message}
                                    
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                <div className="btn-wrapper">
                    <button onClick={this.sizeChanger}>Change size!</button>
                </div>
            </div>
        )
    }
}