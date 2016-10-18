import React, { Component } from 'react';
import Activity from './Activity.js';

class Chart extends Component {

  render() {
    if(this.props.activities !== null){
      var providers = {instagram: 0,
                       tumblr: 0,
                       facebook: 0,
                       twitter: 0};
      for(var i = 0; i < this.props.activities.length; i++){
        var activity = this.props.activities[i];
        providers[activity.provider] += activity.activity_likes;
      }
      console.log(providers);
    }
    return (<div id='chart-container'>
              <h1>Chart Goes here</h1>
            </div>)
  }

}

export default Chart;