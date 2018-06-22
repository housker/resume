import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap';
import $ from 'jquery';
import App from './components/App.jsx';
import Portfolio from './components/Portfolio.jsx';
import Resume from './components/Resume.jsx';
import Carousel from './components/Carousel.jsx';

ReactDOM.render(<BrowserRouter>
  <Switch>
  <Route path="/" exact component={App} />
  <Route path="/portfolio" exact component={Portfolio} />
  <Route path="/resume" exact component={Resume} />
  <Route path="/carousel" exact component={Carousel} />
  </Switch>
  </BrowserRouter>, document.getElementById('root'));