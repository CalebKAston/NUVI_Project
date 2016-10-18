import React, { Component } from 'react';
import './App.css';

class Activity extends Component {

  constructor(props){
    super(props);
    this.state = this.props.activity;
  }

  onLike(activity) {
    this.setState({
      activity_likes: this.state.activity_likes + 1
    })
  }

  render() {
    var activity = this.props.activity;
    if(this.props.activity.activity_attachment_type === null){
      return (
        <div className="Event">
          <p>{activity.activity_date}</p>
          <div className="user">
            <img className="Avatar" src={activity.actor_avator}></img>
            <p><strong>{activity.actor_name}</strong></p>
          </div>
          <p>{activity.provider}: {activity.actor_username}</p>
          <p>{activity.activity_message}</p>
          <button onClick={function(){this.onLike(activity)}.bind(this)}>likes {this.state.activity_likes}</button>
        </div>
      );
    } else {
      return (
        <div className="Event">
          <p>{activity.activity_date}</p>
          <div className="user">
            <img className="Avatar" src={activity.actor_avator}></img>
            <p><strong>{activity.actor_name}</strong></p>
          </div>
          <p>{activity.provider}: {activity.actor_username}</p>
          <img className="Media" src={activity.activity_message}></img><br/>
          <button onClick={function(){this.onLike(activity)}.bind(this)}>likes {this.state.activity_likes}</button>

        </div>
      );
    }
  }

}

export default Activity;
