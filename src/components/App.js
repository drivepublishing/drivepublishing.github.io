import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import { Home, Latin, Partners, Solutions } from '../screens';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/latin" component={Latin} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/solutions" component={Solutions} />
        </div>
      </Router>
    );
  }
}

export default App;
