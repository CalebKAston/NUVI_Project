import React, { Component } from 'react';
import './App.css';

class Activity extends Component {

  render() {
    if(this.props.activity.activity_attachment_type === null){
      return (
        <div className="Event">
        <p>{this.props.activity.activity_date}</p>
        <img src={this.props.activity.actor_avator}></img>
        <p><strong>{this.props.activity.actor_name}</strong></p>
        <p>{this.props.activity.provider}: {this.props.activity.actor_username}</p>
        <p>{this.props.activity.activity_message}</p>
        </div>
      );
    } else {
      return (
        <div className="Event">
        <p>{this.props.activity.activity_date}</p>
        <img src={this.props.activity.actor_avator}></img>
        <p><strong>{this.props.activity.actor_name}</strong></p>
        <p>{this.props.activity.provider}: {this.props.activity.actor_username}</p>
        <img src={this.props.activity.activity_message}></img>
        </div>
      );
    }
  }

}

export default Activity;
