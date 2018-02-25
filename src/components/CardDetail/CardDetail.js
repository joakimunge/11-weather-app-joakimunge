import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import moment from 'moment-timezone';
import { default as Loader } from '../Loader/Loader';
import { default as Hour } from './Hour/Hour';
import { default as CardDays } from '../CardDays/CardDays';
import { TimeToString, LocalTime, LocalDate } from '../Helpers/Helpers';

import './CardDetail.css';
import '../Helpers/Weathericons/Weathericons.css'

class CardDetail extends Component {

  constructor() {
    super();
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
      isSaved: false,
      wasSuccessful: false,
      isSearchQuery: true,
      isGeoQuery: true,
      time: moment()
    }

    this.saveLocation = this.saveLocation.bind(this);
  }

  isSaved() {
    const locations = JSON.parse(localStorage.getItem('savedLocations')) || [];

    const saved = locations.filter((location) => 
      location.name === this.state.city
    );

    if (saved.length > 0) {
      return true;
    }

    return false;
  }

  saveLocation() {
    const locations = JSON.parse(localStorage.getItem('savedLocations')) || [];

    if(this.isSaved()) {
      const indexToRemove = locations.map(item => { return item.name}).indexOf(this.state.city);
      locations.splice(indexToRemove, 1);
      localStorage.setItem('savedLocations', JSON.stringify(locations))
      return;
    }

    const location = {
      "name": this.state.city
    }

    locations.push(location);
    localStorage.setItem('savedLocations', JSON.stringify(locations))
    this.setState({
      isSaved: true
    })
    this.forceUpdate();
  }

  getCoordsFromCity(city) {
    this.setState({
      loadingState: 'Fetching coordinates..'
    });
    fetch(this.state.gmap.url + '&address=' +  city + '&key=' + this.state.gmap.key)
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

  getAreaFromCoords(coords) {
    fetch(this.state.gmap.url + 
      'latlng=' + coords.latitude + 
      ',' + coords.longitude + 
      '&result_type=locality' +
      '&key=' + 
      this.state.gmap.key)
      .then(res => res.json())
      .then(res => {
        this.setState({
          city: res.results[0].address_components[0].long_name 
        })
      })
  }

  setCurrentPosition(pos) {
    this.setState({
        location: {
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude
        }
      }, this.getForecast);

    this.getAreaFromCoords(pos.coords);
  };

  getForecast() {
    fetch(this.state.api.proxy + 
          this.state.api.url + 
          this.state.api.key + 
          '/' + 
          this.state.location.latitude + 
          ',' + 
          this.state.location.longitude + 
          '?exclude=minutely,alerts,flags?units=si'
      )
      .catch(error => {
        this.setState({
          wasSuccessful: false
        })
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          isSaved: this.isSaved(),
          wasSuccessful: true,
          forecast: res
        });
      });
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(success => this.setCurrentPosition(success));
  }

  componentDidMount() {
    if(this.props.match.path && this.props.match.path === '/whereami') {
      this.getCurrentLocation();
      return;
    }
    this.setState({city: this.props.match.params.location})
    this.getCoordsFromCity(this.props.match.params.location);
    this.ticker = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        wasSuccessful: false
    });
    if(nextProps.match.path && nextProps.match.path === '/whereami') {
      this.getCurrentLocation();
      return;
    }
    if(this.props.match.params.location !== nextProps.match.params.location) {
      this.setState({city: nextProps.match.params.location})
    }
  }

  tick() {
    this.setState({
      time: moment()
    })
  }

  renderHourlyPrognosis() {
    let hourlyPrognosis = [];

    for(let i = 0; i < 21; i++) {
      if (i % 3 === 0 && i !== 0) { 
        hourlyPrognosis.push(
          <Hour 
            key={i} 
            time={moment(this.state.forecast.hourly.data[i].time * 1000)}
            timezone={this.state.forecast.timezone}
            icon={this.state.forecast.hourly.data[i].icon} 
            temp={this.state.forecast.hourly.data[i].temperature} 
          />
        );
      }
    } 

    return hourlyPrognosis.map(prognosis => prognosis);
  }

  render() {
    return (
      <CSSTransitionGroup
      className="flex"
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      { this.state.wasSuccessful && this.state.forecast ?
        <div className="CardDetail__wrapper">
          <div className="CardDetail">
            <div className={`CardDetail__weather CardDetail__weather--${TimeToString(this.state.time, this.state.forecast.timezone)}`} >
              <span className="CardDetail__save" onClick={this.saveLocation}>
                {this.state.isSaved 
                  ? <i className="fas fa-star fa-2x"></i>
                  : <i className="far fa-star fa-2x"></i>
                }
              </span>
              <span className="CardDetail__backdrop"><i className={`wi ${this.state.forecast.daily.data[0].icon}`}></i></span>
              <div className="CardDetail__location">
                <h3>{this.state.city.toUpperCase()}</h3>
                <h4>{this.state.forecast.currently.summary.toUpperCase()}</h4>
              </div>
              <div className="CardDetail__temp">
                <span>{this.state.forecast.currently.temperature.toFixed()}°</span>
              </div>
              <div className="CardDetail__datetime">
                <span className="CardDetail__time">{LocalTime(this.state.time, this.state.forecast.timezone, 'HH:mm:ss')}</span>
                <span className="CardDetail__date">{LocalDate(this.state.time, this.state.forecast.timezone)}</span>
              </div>
            </div>
            <div className="CardDetail__prognosis">
              <ul className="CardDetail__prognosis__list">
                 { this.renderHourlyPrognosis() }
              </ul>
            </div>
          </div>
          <div className="CardDetail__daily">
            <CardDays forecast={this.state.forecast.daily} limit="8" />
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