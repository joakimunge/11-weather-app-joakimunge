import React, { Component } from 'react';
import { LocalTime } from '../../Helpers/Helpers';

import './Hour.css';
import '../../Helpers/Weathericons/Weathericons.css';

class Hour extends Component {
  render() {
    return (
      <li className="CardDetail__prognosis__item">
        <span className="icon"><i className={`wi ${this.props.icon}`}></i></span>
        <p>{LocalTime(this.props.time, this.props.timezone, 'LT')}</p>
        <span className="temp">{this.props.temp.toFixed()}°</span>
      </li>
    );
  }
}

export default Hour;