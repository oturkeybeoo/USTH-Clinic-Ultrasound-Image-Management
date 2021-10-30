import React from 'react';
import Navbar from './Navbar';
import './LandingPage.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PatientLogin from './pages/PatientLogin';

function LandingPage() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/patient_login' component={PatientLogin} />
        </Switch>
      </Router>
  );
}

export default LandingPage;
