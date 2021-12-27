import React, { Component } from 'react';

export default class Colors extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            list: [
                {
                id: '1',
                message: 'Hello!'
                }
            ],
            
            name:'',
            message: '',
            color: 'black'

        }
        
        this.colorChanger = this.colorChanger.bind(this)
    }

    colorChanger() {
        if (this.state.color == 'black') {
            this.setState({
                color: 'red'
            });
        } else if (this.state.color == 'red') {
            this.setState({
                color: 'blue'
            });
        } else if (this.state.color == 'blue') {
            this.setState({
                color: 'purple'
            });
        } else if (this.state.color == 'purple') {
            this.setState({
                color: 'pink'
            });
        } else if (this.state.color == 'pink') {
            this.setState({
                color: 'orange'
            });
        } else if(this.state.color == 'orange') {
            this.setState({
                color: 'white'
            });
        } else if(this.state.color == 'white') {
            this.setState({
                color: 'black'
            });
        }
    }
    
    render() {
        return(
            <div className="section">
                <p>Change the color of the text below.</p>

                <div className="messageDiv">
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li 
                                    key="{item}"
                                    style={{ color: this.state.color }}
                                >
                                    {item.message}
                                    
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                <div className="btn-wrapper">
                    <button onClick={this.colorChanger}>Change Color!</button>
                </div>
            </div>
        )
    }
}