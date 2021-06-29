import React, { Component } from "react";
import "./App.css";

import CarList from "./CarList";
import Image from "./Image";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <CarList />
            </Route>
            <Route path="/image">
              <Image />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
