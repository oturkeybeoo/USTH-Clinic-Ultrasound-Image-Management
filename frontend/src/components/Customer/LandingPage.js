import React from 'react';
import Navbar from './Navbar';
import './LandingPage.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import PatientLogin from './pages/PatientLogin';

function LandingPage() {
  let { path, url } = useRouteMatch();
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${path}/patient_login`} component={PatientLogin} />
        </Switch>
      </Router>
  );
}

export default LandingPage;
