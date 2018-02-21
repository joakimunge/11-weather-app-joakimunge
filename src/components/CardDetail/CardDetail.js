import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './CardDetail.css';

class CardDetail extends Component {

  constructor() {
    super();
    this.state = {
      location: 'STOCKHOLM',
      temp: '7°',
      condition: 'CLEAR',
      time: new Date(),
      date: new Date().toLocaleDateString()
    }
  }

  componentDidMount() {
    this.ticker = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUnmount() {
    clearInterval(this.ticker);
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <CSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div className="CardDetail">
          
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default CardDetail;