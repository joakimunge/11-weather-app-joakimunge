import React, { Component } from 'react';
import { default as Search } from '../Search/Search';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <div className="logo">
            <Link to="/"><i className="wi wi-umbrella"></i></Link>
          </div>
          <Search />
        </nav>
      </header>
    );
  }
}

export default Header;