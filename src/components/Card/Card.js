import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { default as CardDays } from '../CardDays/CardDays';

import './Card.css';

class Card extends Component {

  constructor() {
    super();
    this.state = {
      location: 'STOCKHOLM',
      temp: '7°',
      condition: 'CLEAR',
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    }
  }

  render() {
    return (
      <CSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div className="card">
          <div className={`card__weather card__weather--${this.props.color}`} >
            <div className="card__location">
              <h3 className="card__location__city">{this.state.location}</h3>
              <h4 className="card__location__city">{this.state.condition}</h4>
            </div>
            <div className="card__temp">
              <span>7°</span>
            </div>
            <div className="card__datetime">
              <span className="card__time">{this.state.time}</span>
              <span className="card__date">{this.state.date}</span>
            </div>
          </div>
          <div className="card__prognosis">
            <CardDays />
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Card;