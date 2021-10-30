import React, { Component } from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/Customer/LandingPage"
import PatientLogin from "./components/Customer/pages/PatientLogin";
import Dashboard from "./components/Doctor/Dashboard";
import LoginManagement from "./components/Doctor/LoginManagement";


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/management" component={Dashboard} />
          <Route path="/login" component={LoginManagement} />
          <Route path="/patient_login" component={PatientLogin} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
