import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

import Database from '../../db.json'; // Temp database

class CardContainer extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(Database);
		console.log(this.props)
	}

  render() {
    return (
      <div className="CardContainer">
        { Database.locations.map(location => 
        	<Card key={location.key} color="sunrise" city={location.name} />
        	)
      	}
      </div>
    );
  }
}

export default CardContainer;