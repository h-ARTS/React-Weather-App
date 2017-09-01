import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Example from 'Example';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Router path="about" component={About} />
      <Router path="example" component={Example} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
