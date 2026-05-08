import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={TaskList} />
          {/* Add more routes here */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
