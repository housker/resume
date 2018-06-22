import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap';
import $ from 'jquery';
import App from './components/App.jsx';
import Portfolio from './components/Portfolio.jsx';

ReactDOM.render(<BrowserRouter>
  <Switch>
  <Route path="/" exact component={App} />
  <Route path="/portfolio" exact component={Portfolio} />
  </Switch>
  </BrowserRouter>, document.getElementById('root'));