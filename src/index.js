import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Hello} from './Hello';
import {About} from './About';
import {Cursor} from './Cursor';
import {Contact} from './Contact';
import {Background} from './Background';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
ReactDOM.render(
  <>
    
    <Router>
    <Cursor />
    <App />
    <Background/>
      <Switch>
        <Route exact path="/">
          <Hello/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);

reportWebVitals();
