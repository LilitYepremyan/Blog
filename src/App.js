/* eslint-disable no-unused-vars */
// import './App.css';
import React from 'react';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import LoginForm from './Pages/Login/LoginForm';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
