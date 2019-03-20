import React, { Component } from 'react';
import Header  from './components/header'
import Container from './components/body/Container';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";
import './App.css';
import { Cards } from './components/body/Cards';
import Discover from './components/body/Discover';
import Movie from './components/body/Movie';
import TvSeries from './components/body/TvSeries';
import NoMatch from './components/body/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <div style={{'paddingTop':72+'px'}}>
            <Switch>
              <Route exact strict path="/" component={Discover} />
              <Route exact strict path="/movies" component={Movie} />
              <Route exact strict path="/tv-series" component={TvSeries}/>
              <Route  component={NoMatch}/>
              </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

