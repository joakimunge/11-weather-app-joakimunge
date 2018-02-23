import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { default as CardDays } from '../CardDays/CardDays';
import { default as Loader } from '../Loader/Loader';
import { TimeToString, LocalTime, LocalDate } from '../Helpers/Helpers';
import moment from 'moment-timezone';


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
      });
  }

  componentDidMount() {
    this.getCoordsFromCity(this.props.city);
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
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeave={true}
      transitionLeaveTimeout={500}>
      { this.state.wasSuccessful && this.state.forecast ?
       <Link to={{
        pathname: `/location/${this.props.city}`,
        state: { fromCard: true }
       }} >
          <div className="card">
            <div className={`card__weather card__weather--${TimeToString(this.state.time, this.state.forecast.timezone)}`} >
              <div className="card__location">
                <h3 className="card__location__city">{this.props.city.toUpperCase()}</h3>
                <h4 className="card__location__city">{this.state.forecast.currently.summary.toUpperCase()}</h4>
              </div>
              <div className="card__temp">
                <span>{this.state.forecast.currently.temperature.toFixed()}°</span>
              </div>
              <div className="card__datetime">
                <span className="card__time">{LocalTime(this.state.time, this.state.forecast.timezone, 'HH:mm:ss')}</span>
                <span className="card__date">{LocalDate(this.state.time, this.state.forecast.timezone)}</span>
              </div>
            </div>
            <div className="card__prognosis">
              <CardDays forecast={this.state.forecast.daily} limit="3" />
            </div>
          </div>
        </Link>
        :
        <Loader>
          <h3>{this.state.loadingState}</h3>
        </Loader>
      }
      </CSSTransitionGroup>
    );
  }
}

export default Card;