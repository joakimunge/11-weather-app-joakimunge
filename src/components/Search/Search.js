import React, { Component } from 'react';

import './Search.css';

class Search extends Component {
  render() {
    return (
      <form>
        <input className="search" type="text" name="search" placeholder="Find a location.."/>
      </form>
    );
  }
}

export default Search;