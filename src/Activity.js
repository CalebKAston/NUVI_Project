import React, { Component } from 'react';
import './App.css';

class Activity extends Component {

  onLike(activity) {
    console.log('Before', activity.activity_likes);
    activity.activity_likes++;
    console.log('After', activity.activity_likes);
    alert("You liked this");
  }

  render() {
    var activity = this.props.activity;
    if(this.props.activity.activity_attachment_type === null){
      return (
        <div className="Event">
          <p>{activity.activity_date}</p>
          <img className="Avatar" src={activity.actor_avator}></img>
          <p><strong>{activity.actor_name}</strong></p>
          <p>{activity.provider}: {activity.actor_username}</p>
          <p>{activity.activity_message}</p>
          <button onClick={function(){this.onLike(activity)}.bind(this)}>like</button>
        </div>
      );
    } else {
      return (
        <div className="Event">
          <p>{activity.activity_date}</p>
          <img className="Avatar" src={activity.actor_avator}></img>
          <p><strong>{activity.actor_name}</strong></p>
          <p>{activity.provider}: {activity.actor_username}</p>
          <img src={activity.activity_message}></img><br/>
          <button onClick={function(){this.onLike(activity)}.bind(this)}>like</button>
        </div>
      );
    }
  }

}

export default Activity;
