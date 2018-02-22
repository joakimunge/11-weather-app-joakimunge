import React, { Component } from 'react';
import { EpochToDay } from '../Helpers/Helpers.js';

import './CardDay.css';
import '../Helpers/Weathericons/Weathericons.css'

class CardDay extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <li className="CardDay">
      	<div className="day">
      		<p>{EpochToDay(this.state.forecast.time)}</p>
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