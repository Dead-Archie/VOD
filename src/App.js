import React, { Component } from 'react';
import './App.css';
import PropsTag from './components/props';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PropsTag name="Niladri"/>
        <PropsTag name="teja"/>
      </div>
    );
  }
}

export default App;

