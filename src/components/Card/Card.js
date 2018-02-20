import React, { Component } from 'react';
import { default as CardDays } from '../CardDays/CardDays';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__weather">
          <div className="card__location">
            <h3 className="card__location__city">STOCKHOLM</h3>
            <h4 className="card__location__city">CLEAR</h4>
          </div>
          <div className="card__temp">
            <span>7°</span>
          </div>
          <div className="card__datetime">
            <span className="card__time">08:54</span>
            <span className="card__date">TUE, 13 JAN</span>
          </div>
        </div>
        <div className="card__prognosis">
          <CardDays />
        </div>
      </div>
    );
  }
}

export default Card;