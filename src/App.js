import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './container/NavBar/NavBar';
import Works from './container/Works/Works';
import About from './container/About/About';
import classes from './App.module.css';
import './component/FontAwesome/FontAwesome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.bgc}>
          <NavBar></NavBar>
          <Switch>
            <Route path='/works' component={Works}></Route>
            <Route path='/' component={About}></Route>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
