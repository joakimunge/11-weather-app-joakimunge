import React, { Component } from 'react';
import { default as CardDay } from '../CardDay/CardDay';

import './CardDays.css';

class CardDays extends Component {

	constructor(props) {
		super(props);
		this.state = props;
	}

	componentDidMount() {
		console.log(this.state);
	}
  render() {
    return (
      <ul className="CardDays">
      	<CardDay forecast={this.state.forecast.data[0]}/>
      	<CardDay forecast={this.state.forecast.data[1]}/>
      	<CardDay forecast={this.state.forecast.data[2]}/>
      </ul>
    );
  }
}

export default CardDays;