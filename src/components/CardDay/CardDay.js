import React, { Component } from 'react';

import './CardDay.css';

class CardDay extends Component {
  render() {
    return (
      <li className="CardDay">
      	<div className="day">
      		<p>Thursday</p>
      	</div>
      	<div className="weather">
      		<span className="temp">22°</span>
      		<span className="icon"><i className="wi wi-night-sleet"></i></span>
      	</div>
      </li>
    );
  }
}

export default CardDay;