import React, { Component } from 'react';
import './App.css';
import Activity from './Activity.js';

class Activities extends Component {

  render() {
    console.log(this.props.activities);
    if(this.props.activities === null){
      return (<p>Please Wait...</p>)
    } else {
      return (
        <p className="App-intro">
          {this.props.activities.map(function(activity){
            return <Activity activity={activity} key={activity.id}/>
          })}
        </p>
      );
    }
  }

}

export default Activities;
