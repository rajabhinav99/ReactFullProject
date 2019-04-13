import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './Create';
import Get from './Get';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <h2>Welcome to Add Product</h2>
        <ul>
          <li><Link to={'/create'}>Create</Link></li>
          <li><Link to={'/Get'}>List</Link></li>
        </ul>
        <hr />
        <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/Get' component={ Get } />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
