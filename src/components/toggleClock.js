import React,{ Component } from 'react';

export default class ToggleClock extends Component {
    constructor() {
        super();

        this.state = {
            time: new Date().toLocaleTimeString(),
            isShown: true

        };

        this.toggleClock = this.toggleClock.bind(this)
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            this.setState({
                time: String(new Date().toLocaleTimeString())
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.liveTime)
    }

    toggleClock() {
        if (this.state.isShown) {
            this.setState({
                time: "",
                isShown: false,
                display: "none"
            });
        } else {
            this.setState({
                time: new Date().toLocaleTimeString(),
                isShown: true, 
                display: "block"
            })
        }
    }
    
    render() {
        return (
            <div className="section">
                <p>ToggleClock</p>
                <p style={{display: this.state.display}}>{this.state.time}</p>

                <div className="btn-wrapper">
                    <button onClick={this.toggleClock}>Hide</button>
                </div>
            </div>
        );
    }
}