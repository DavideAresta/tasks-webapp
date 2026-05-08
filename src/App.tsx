```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/Auth/Login';
import { Dashboard } from './components/Dashboard';
import { AuthService } from './services/AuthService';
import Header from './components/Header';
import Routes from './routes';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ErrorBoundary>
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Routes />
            <Redirect from="/" to="/login" />
          </Switch>
        </ErrorBoundary>
      </Router>
    </AuthProvider>
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