import React, { Component } from 'react';
import Header  from './components/header'
import Container from './components/body/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container/>
      </div>
    );
  }
}

export default App;

