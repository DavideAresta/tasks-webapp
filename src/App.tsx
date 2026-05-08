import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user/:userId" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;
