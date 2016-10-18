import React, { Component } from 'react';
import './App.css';

class Intro extends Component {



  render() {
    console.log(this.props.activities);
    return (
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload. Please
      </p>
    );
  }
}

export default Intro;
