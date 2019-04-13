import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br />
          <input type="text" placeholder="Type Item  here" value={this.state.newItem}/>
        </div>
      </div>
    );
  }
}

export default App;
