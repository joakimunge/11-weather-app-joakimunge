import React, { Component } from 'react';

import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <span className={`loader__container`}>
      	{this.props.children}
      	<i className="wi wi-day-sunny loader"></i>
      </span>
    );
  }
}

export default Loader;