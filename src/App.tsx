```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/Auth/Login';
import { Dashboard } from './components/Dashboard';
import { ProjectList } from './components/Project/ProjectList';
import { AuthService } from './services/AuthService';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/projects" component={ProjectList} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

const PrivateRoute: React.FC<{ component: React.FC; path: string }> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthService.isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default App;
```