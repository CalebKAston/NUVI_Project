import React, { Component } from 'react';
import './App.css';

class Activity extends Component {

  render() {
    return (
      <div>
      <p>Hello, {this.props.activity.actor_username}</p>
      </div>
    );
  }

}

export default Activity;
