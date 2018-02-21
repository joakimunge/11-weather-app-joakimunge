import React, { Component } from 'react';
import { Card, CardContainer, Header } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer>
          <Card color="night"/>
        </CardContainer>
      </div>
    );
  }
}

export default App;
