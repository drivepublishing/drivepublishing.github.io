import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Home, Latin, Partners, Solutions } from '../screens';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/latin" component={Latin} />
          <Route path="/partners" component={Partners} />
          <Route path="/solutions" component={Solutions} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
