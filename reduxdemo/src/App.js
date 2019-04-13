import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter'

class App extends Component {
  render() {
    return (
        <div>
          <h1>Redux Demo</h1>
          <Counter />
        </div>      
      );
  }
}

export default App;
