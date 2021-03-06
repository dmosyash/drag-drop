import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from './components/Header.js'
import Home from './components/Home.js'
import './App.css';

// let Howler

// if (typeof window !== 'undefined') {
//   Howler = require('howler')
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='address' component={Address} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}

const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => (
  <h1>404.. This page is not found!</h1>)
const Container = (props) => <div>
  <Header />
  {props.children}
</div>

export default App;
