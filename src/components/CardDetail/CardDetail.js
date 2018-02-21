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
          <div className={`CardDetail__weather CardDetail__weather--${this.props.color}`} >
            <span className="CardDetail__backdrop"><i className="wi wi-night-sleet"></i></span>
            <div className="CardDetail__location">
              <h3>STOCKHOLM</h3>
              <h4>THUNDER STORM</h4>
            </div>
            <div className="CardDetail__temp">
              <span>7°</span>
            </div>
            <div className="CardDetail__datetime">
              <span className="CardDetail__time">08:54</span>
              <span className="CardDetail__date">TUE, 18 FEB</span>
            </div>
          </div>
          <div className="CardDetail__prognosis">
            <ul className="CardDetail__prognosis__list">
              <li className="CardDetail__prognosis__item">
                <span className="icon"><i className="wi wi-night-sleet"></i></span>
                <p>Thursday</p>
                <span className="temp">22°</span>
              </li>
              <li className="CardDetail__prognosis__item">
                <span className="icon"><i className="wi wi-night-sleet"></i></span>
                <p>Thursday</p>
                <span className="temp">22°</span>
              </li>
              <li className="CardDetail__prognosis__item">
                <span className="icon"><i className="wi wi-night-sleet"></i></span>
                <p>Thursday</p>
                <span className="temp">22°</span>
              </li>
              <li className="CardDetail__prognosis__item">
                <span className="icon"><i className="wi wi-night-sleet"></i></span>
                <p>Thursday</p>
                <span className="temp">22°</span>
              </li>
              <li className="CardDetail__prognosis__item">
                <span className="icon"><i className="wi wi-night-sleet"></i></span>
                <p>Thursday</p>
                <span className="temp">22°</span>
              </li>
              <li className="CardDetail__prognosis__item">
                <span className="icon"><i className="wi wi-night-sleet"></i></span>
                <p>Thursday</p>
                <span className="temp">22°</span>
              </li>
            </ul>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default CardDetail;