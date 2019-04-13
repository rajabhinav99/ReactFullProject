import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CompoC from './component/CompoC'
import UserProvider from './component/UserContext'
import ContextDemo from './component/ContextApi/index'
import LoginPage from './component/login/loginpageComponent';
import SignOut from './component/login/signout';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Welcome to Login/Logout App</h2>
              <hr />
              <Switch>
                <Route path='/login' render={() => <LoginPage />} />
                <Route path='/logout/:username' render={() => <SignOut/>} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
