import React, { Component } from 'react';
import './App.css';

class Activities extends Component {



  render() {
    console.log(this.props.activities);
    if(this.props.activities === null){
      return (<p>Please Wait...</p>)
    } else {
      return (
        <p className="App-intro">
          {this.props.activities.map(function(activity){
            return <p>Hello</p>
          })}
        </p>
      );
    }
  }
}

export default Activities;
