import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from '../Home';
import Watchlist from '../Watchlist';
import MovieDetail from '../MovieDetail';

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
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
    
          <hr />
    
          <Route exact path="/" component={Home} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/movie-detail/:id" component={MovieDetail} />
          <Redirect to={"/"} />
        </div>
      </Router>
    );
  }
}

export default App;