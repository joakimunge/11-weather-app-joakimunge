import React, { Component } from 'react';

import './CardContainer.css';

class CardContainer extends Component {
  render() {
    return (
      <div className="CardContainer">
        {this.props.children}
      </div>
    );
  }
}

export default CardContainer;