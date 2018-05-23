import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from '../Home';
import About from '../About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
    
          <hr />
    
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to={"/"} />
        </div>
      </Router>
    );
  }
}

export default App;