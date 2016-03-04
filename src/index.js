import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/Main';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import MoviesListComponent from './components/MoviesListComponent'

// Render the main component into the dom
ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={AppComponent} />
      {/*<Route path="/movies/:movieId" component={MoviesItemComponent}/>*/}
      <Route path="/movies" component={MoviesListComponent}/>
      {/*<Route path="*" component={PageNotFound}/>*/}
    </Route>
  </Router>, document.getElementById('app'));
