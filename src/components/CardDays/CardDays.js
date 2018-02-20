import React, { Component } from 'react';
import { default as CardDay } from '../CardDay/CardDay';

import './CardDays.css';

class CardDays extends Component {
  render() {
    return (
      <ul className="CardDays">
      	<CardDay />
      	<CardDay />
      	<CardDay />
      </ul>
    );
  }
}

export default CardDays;