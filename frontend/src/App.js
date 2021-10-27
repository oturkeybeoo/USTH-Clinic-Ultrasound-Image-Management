import React, { Component } from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import CreateNewCase from "./components/Doctor/CreateNewCase";
import Navbar from "./components/Doctor/Navbar";
import PatientList from "./components/Doctor/PatientList";
import LandingPage from "./components/Customer/LandingPage";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/create-new" exact component={CreateNewCase} />
          <Route path="/patient-list" exact component={PatientList} />
          <Route path="/home-page" exact component = {LandingPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
