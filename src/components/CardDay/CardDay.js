import React, { Component } from 'react';

import './CardDay.css';
import '../Helpers/Weathericons/Weathericons.css'

class CardDay extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  epochToDay(epoch) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let date = new Date(epoch * 1000);
    return days[date.getDay()];
  }

  render() {
    return (
      <li className="CardDay">
      	<div className="day">
      		<p>{this.epochToDay(this.state.forecast.time)}</p>
      	</div>
      	<div className="weather">
      		<span className="temp">{this.state.forecast.temperatureMax.toFixed()}°</span>
      		<span className="icon"><i className={`wi ${this.state.forecast.icon}`}></i></span>
      	</div>
      </li>
    );
  }
}

export default CardDay;