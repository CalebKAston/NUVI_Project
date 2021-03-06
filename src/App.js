import React, { Component } from 'react';
import Activities from './Activities.js'
import Chart from './Chart.js';
import $ from '../node_modules/jquery/dist/jquery.js'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: null
    }
  }

  componentDidMount() {
    $.get("https://nuvi-challenge.herokuapp.com/activities", function(activities) {
      this.setState({
        activities: activities
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to NUVI Project</h2>
        </div>
        <div id='chart-container'></div>
        <Chart activities={this.state.activities}/>
        <Activities activities={this.state.activities}/>
      </div>
    );
  }
}

export default App;
