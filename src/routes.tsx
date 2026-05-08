import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
