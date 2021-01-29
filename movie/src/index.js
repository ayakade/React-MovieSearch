import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import components
import App from './components/App';
import MovieDetail from './components/MovieDetail';

// import css style
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><App /></Route>
      <Route path="/movie/:id"><MovieDetail /></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);