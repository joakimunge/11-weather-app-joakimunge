import React, { Component } from 'react';
import { default as Search } from '../Search/Search';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <div className="logo">
            <i className="wi wi-umbrella"></i>
          </div>
          <Search />
        </nav>
      </header>
    );
  }
}

export default Header;