import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import async from 'components/Async1';

const Home = async(() => import('../pages/home'));

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/home" render={() => <Home />} />
    </Switch>
  </Router>
);

export default Routes;
