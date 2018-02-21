import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { default as CardDays } from '../CardDays/CardDays';
import { default as Loader } from '../Loader/Loader';


import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      api: {
        key: process.env.REACT_APP_DARKSKY_SECRET,
        url: process.env.REACT_APP_DARKSKY_URL,
        proxy: process.env.REACT_APP_PROXY_URL
      },
      location: {
        longitude: '-71.0589',
        latitude: '42.3601',
      },
      temp: '7°',
      condition: 'CLEAR',
      time: new Date(),
      date: new Date().toLocaleDateString()
    }
  }

  getForecast() {
    fetch(this.state.api.proxy + 
          this.state.api.url + 
          this.state.api.key + 
          '/' + 
          this.state.location.latitude + 
          ',' + 
          this.state.location.longitude + 
          '?exclude=minutely,hourly,alerts,flags?units=si'
      )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          forecast: res
        });
      })
      .then(res => console.log(this.state))
  }

  componentDidMount() {
    this.getForecast();
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

  cleanUpTimezone(timezone) {
    let data = timezone.substring(timezone.lastIndexOf("/") + 1);
    data = data.replace('_', ' ');
    return data.toUpperCase();
  }

  render() {
    return (
      <CSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeave={true}
      transitionLeaveTimeout={500}>
      { this.state.forecast ?
        <div className="card">
          <div className={`card__weather card__weather--${this.props.color}`} >
            <div className="card__location">
              <h3 className="card__location__city">{this.cleanUpTimezone(this.state.forecast.timezone)}</h3>
              <h4 className="card__location__city">{this.state.forecast.currently.summary.toUpperCase()}</h4>
            </div>
            <div className="card__temp">
              <span>{this.state.forecast.currently.temperature.toFixed()}°</span>
            </div>
            <div className="card__datetime">
              <span className="card__time">{this.state.time.toLocaleTimeString()}</span>
              <span className="card__date">{this.state.date}</span>
            </div>
          </div>
          <div className="card__prognosis">
            <CardDays forecast={this.state.forecast.daily} />
          </div>
        </div>
        :
        <Loader />
      }
      </CSSTransitionGroup>
    );
  }
}

export default Card;