import React, { Component } from 'react';
import { Card, CardContainer, Header } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer>
          <Card />
          <Card />
        </CardContainer>
      </div>
    );
  }
}

export default App;
