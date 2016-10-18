import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Activities from './Activities.js'
import $ from '../node_modules/jquery/dist/jquery.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: null
    }
  }

  componentDidMount() {
    $.get("https://nuvi-challenge.herokuapp.com/activities", function(activities) {
      console.log('***', activities[0]);
      this.setState({
        activities: activities
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to NUVI Project</h2>
        </div>
        <Activities activities={this.state.activities}/>
      </div>
    );
  }
}

export default App;
