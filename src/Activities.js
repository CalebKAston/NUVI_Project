import React, { Component } from 'react';
import Activity from './Activity.js';
import './App.css';

class Activities extends Component {

  render() {
    if(this.props.activities === null){
      return (<p>Please Wait...</p>)
    } else {
      return (
        <div className="Event-list">
          {this.props.activities.map(function(activity){
            return <Activity activity={activity} key={activity.id}/>
          })}
        </div>
      );
    }
  }

}

export default Activities;
