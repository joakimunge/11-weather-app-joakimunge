import React, { Component } from 'react';
import { Card, CardContainer, CardDetail, Header } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer>
          {/* <CardDetail color="sunrise" />
          <CardDetail color="day" />
          <CardDetail color="sunset" />
          <CardDetail color="night" /> */}
          <Card color="sunrise" city="Stockholm" />
          <Card color="night" city="Dubai" />
          <Card color="sunrise" city="Los Angeles" />
          <Card color="sunset" city="One" />



        </CardContainer>
      </div>
    );
  }
}

export default App;
