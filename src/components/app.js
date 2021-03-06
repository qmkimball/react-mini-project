import React, { Component } from 'react';
import moment from 'moment';

import Align from './align';
import Hide from './hide';
import Counter from './counter';
import Colors from './colors';
import Resizer from './resizer';
import ToggleClock from './toggleClock';

export default class App extends Component {
  
  componentDidMount() {
    this.liveTime = setInterval(() => {
        this.setState({
            time: String(new Date().toLocaleTimeString())
        })
    }, 1000)
}

  render() {
    return (
      <div className='app'>
        
        <div className="header-wrapper">
          <h1>Mini Projects</h1>
          <h3>Quinn Kimball</h3>
          
          <div>{moment().format('MMMM Do YYYY')}</div>
          <div>{moment().format('h:mm:ss a')}</div>
        </div>
          
        <div className="content-wrapper">
          <Align />
          <Hide />
          <Counter />
          <Colors />
          <Resizer />
          <ToggleClock />

        </div>
      </div>
      
    );
  }
}
