import React, { Component } from 'react';
import { default as Search } from '../Search/Search';
import { default as Button } from '../Button/Button';
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
          <div className="navigation">
            <Link to="/whereami"><Button type="primary">My location</Button></Link>
            <Link to="/"><Button type="secondary">Saved</Button></Link>
            <Search />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;