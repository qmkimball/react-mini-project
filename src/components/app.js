import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
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
          
          <div className="align-me">
            <p>Align Me</p>

            <div className="btn-wrapper">
              <button className="leftbtn">Left</button>

              <button className="centerbtn">Center</button>
              <button>Right</button>

            </div>
          </div>

        </div>
      </div>
      
    );
  }
}
