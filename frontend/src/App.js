import React, { Component } from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/Customer/LandingPage"
import Dashboard from "./components/Doctor/Dashboard";
import LoginManagement from "./components/Doctor/LoginManagement";


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/management" component={Dashboard} />
          <Route path="/login" component={LoginManagement} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
