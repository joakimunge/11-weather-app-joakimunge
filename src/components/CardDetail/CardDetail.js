import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { default as Loader } from '../Loader/Loader';
import { TimeToString, LocalTime, LocalDate } from '../Helpers/Helpers';
import moment from 'moment-timezone';

import './CardDetail.css';
import '../Helpers/Weathericons/Weathericons.css'

class CardDetail extends Component {

  constructor() {
    super();
    console.log(this.state);
    this.state = {
      api: {
        key: process.env.REACT_APP_DARKSKY_SECRET,
        url: process.env.REACT_APP_DARKSKY_URL,
        proxy: process.env.REACT_APP_PROXY_URL
      },
      gmap: {
        url: process.env.REACT_APP_GMAP_URL,
        key: process.env.REACT_APP_GMAP_SECRET
      },
      wasSuccessful: false,
      time: moment()
    }
  }

  getCoordsFromCity(city) {
    this.setState({
      loadingState: 'Fetching coordinates..'
    });
    fetch(this.state.gmap.url + city + '&key=' + this.state.gmap.key)
      .catch(error => console.log(error))
      .then(res => res.json())
      .then(res => this.setState({
        location: {
          longitude: res.results[0].geometry.location.lng,
          latitude: res.results[0].geometry.location.lat,
        },
        loadingState: 'Gathering weather forecast..'
      }))
      .then(res => this.getForecast());
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
      .catch(error => {
        this.setState({
          wasSuccessful: false
        })
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          wasSuccessful: true,
          forecast: res
        });
      })
      .then(_ => console.log(this.state));
  }

  componentDidMount() {
    this.getCoordsFromCity(this.props.match.params.location);
    this.ticker = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  tick() {
    this.setState({
      time: moment()
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
      { this.state.wasSuccessful && this.state.forecast ?
        <div className="CardDetail">
          <div className={`CardDetail__weather CardDetail__weather--${TimeToString(this.state.time, this.state.forecast.timezone)}`} >
            <span className="CardDetail__backdrop"><i className={`wi ${this.state.forecast.daily.icon}`}></i></span>
            <div className="CardDetail__location">
              <h3>{this.props.match.params.location.toUpperCase()}</h3>
              <h4>{this.state.forecast.currently.summary.toUpperCase()}</h4>
            </div>
            <div className="CardDetail__temp">
              <span>{this.state.forecast.currently.temperature.toFixed()}°</span>
            </div>
            <div className="CardDetail__datetime">
              <span className="CardDetail__time">{LocalTime(this.state.time, this.state.forecast.timezone)}</span>
              <span className="CardDetail__date">{LocalDate(this.state.time, this.state.forecast.timezone)}</span>
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
        :
        <Loader>
          <h3>{this.state.loadingState}</h3>
        </Loader>
      }
      </CSSTransitionGroup>
    );
  }
}

export default CardDetail;