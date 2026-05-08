import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import UserAutocomplete from './components/UserAutocomplete';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={UserAutocomplete} />
          <Route path="/login" component={LoginForm} />
          {/* Add more routes here */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
