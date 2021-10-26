import React, { Component } from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import CreateNewCase from "./components/Doctor/CreateNewCase";
import Navbar from "./components/Doctor/Navbar";
import PatientList from "./components/Doctor/PatientList";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/create-new" exact component={CreateNewCase} />
          <Route path="/patient-list" exact component={PatientList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
