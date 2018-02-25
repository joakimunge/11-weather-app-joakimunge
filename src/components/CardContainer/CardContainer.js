import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

class CardContainer extends Component {

  constructor() {
    super();
    this.state = {
      locations: JSON.parse(localStorage.getItem('savedLocations')) || []
    }
  }

  render() {
    return (
      <div className="CardContainer">
        {this.state.locations.length 
          ? this.state.locations.map((location, i) => <Card key={i} city={location.name} />) 
          : <div className="CardContainer__message">
              <h3>Looks like you don't have any saved locations yet.</h3>
              <p>Try adding some by searching and saving them with the <i className="far fa-star"></i></p>
            </div>
        }
      </div>
    );
  }
}

export default CardContainer;