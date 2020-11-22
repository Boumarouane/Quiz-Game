//  eslint-disable
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from './components/HomePage/HomePage'
import SignupPage from './components/Signup/Signup';
import Landing from './components/LandingPage/Landing'
import Login from './components/LoginPage/Login'
import Recovery from './components/RecoveryPage/Recovery'

function App() {
  return (
    <Router>
        <Switch>
          <Route  exact path="/" component={HomePage}/>
          <Route  path="/login" component={Login}/>
          <Route  path="/signup" component={SignupPage}/>
          <Route  path="/recovery" component={Recovery}/>
          <Route  path="/welcome" component={Landing}/>
          {/* <Route  component={ErrorPage}/> */}
        </Switch>
  </Router>
  );
}

export default App;
