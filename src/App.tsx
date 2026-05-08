import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserAutocomplete from './components/UserAutocomplete';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserAutocomplete} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
