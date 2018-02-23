import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { CardContainer, CardDetail } from '../';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={CardContainer} />
          <Route path="/whereami" component={CardDetail} />
          <Route path="/location/:location" component={CardDetail} details={true}/>
        </Switch>
      </main>
    );
  }
}

export default Main;