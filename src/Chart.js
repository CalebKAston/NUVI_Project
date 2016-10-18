import React, { Component } from 'react';
import BarChart from 'react-chartjs';

class Chart extends Component {

  render() {
    if(this.props.activities !== null){
      var chartOptions = {};
      var data = {
        labels: [],
        datasets: [{
          label: 'Likes Based On Providers',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderWidth: 1,
          data: []
        }]
      };
      var providers = {instagram: 0,
                       tumblr: 0,
                       facebook: 0,
                       twitter: 0};
      for(var i = 0; i < this.props.activities.length; i++){
        var activity = this.props.activities[i];
        providers[activity.provider] += activity.activity_likes;
      }
      for(var key in providers){
        data.labels.push(key);
        data.datasets[0].data.push(providers[key]);
      }
      console.log(data);
      return (
        <div className="Chart">
        <h3>Likes Based On Providers</h3>
        <BarChart.Bar data={data} options={chartOptions} width="600" height="250"/>
        </div>)
    } else {
      return (<p>Please Wait...</p>);
    }
  }


}

export default Chart;