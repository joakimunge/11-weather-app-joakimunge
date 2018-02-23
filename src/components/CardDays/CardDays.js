import React, { Component } from 'react';
import { default as CardDay } from '../CardDay/CardDay';

import './CardDays.css';

class CardDays extends Component {

	constructor(props) {
		super(props);
		this.state = props;
	}

	componentWillMount() {
    console.log(this.props)
	}

  renderCardDaysFromLimit(limit) {
    const days = [];
    for (let i = 0; i < limit; i++) {
      days.push(<CardDay key={i} forecast={this.props.forecast.data[i]}/>)
    }

    return days.map(day => day);
  }
  render() {
    return (
      <ul className="CardDays">
        {this.renderCardDaysFromLimit(parseInt(this.props.limit))}
      </ul>
    );
  }
}

export default CardDays;