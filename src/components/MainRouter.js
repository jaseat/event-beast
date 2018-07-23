import React, { Component } from 'react';
import App from './App';
import Landing from './Landing';
import Login from './Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }
  render() {
    return (
      <Router basename="/event-beast">
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={App} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
