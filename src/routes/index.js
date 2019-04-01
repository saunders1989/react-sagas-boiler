import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import HomeContainer from '../views/Home/home.container.ts';

const routes = (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);

export default routes;
