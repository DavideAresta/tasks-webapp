```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/Auth/Login';
import { Dashboard } from './components/Dashboard';
import { AuthService } from './services/AuthService';
import TaskList from './components/TaskList';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/login-form" component={LoginForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/tasks" component={TaskList} />
        <PrivateRoute path="/" exact component={TaskList} />
      </Switch>
    </Router>
  );
};

const PrivateRoute: React.FC<{ component: React.FC; path: string; exact?: boolean }> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthService.isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default App;
```