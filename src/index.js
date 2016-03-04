import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/Main';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import MoviesListComponent from './components/MoviesListComponent';

// Render the main component into the dom
//<Route path="/movies/:movieId" component={MoviesItemComponent}/>

//<Route path="*" component={PageNotFound}/>
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={AppComponent}>
      <IndexRoute component={AppComponent} />
      <Route path='/movies' component={MoviesListComponent}/>
    </Route>
  </Router>
), document.getElementById('app'));
