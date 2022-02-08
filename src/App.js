import React, { Component } from 'react';
import './App.css';
import Automaton from './Automaton';
class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Cellular Automaton</h1>
        <Automaton />
      </div>
    );
  }
}

export default App;