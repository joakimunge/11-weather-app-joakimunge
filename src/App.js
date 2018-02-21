import React, { Component } from 'react';
import { Card, CardContainer, CardDetail, Header } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer>
          <CardDetail color="sunset" />
          <CardDetail color="sunrise" />
          <CardDetail color="night" />
          <CardDetail color="day" />

        </CardContainer>
      </div>
    );
  }
}

export default App;
