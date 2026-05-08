```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/Auth/Login';
import { Dashboard } from './components/Dashboard';
import { AuthService } from './services/AuthService';
import UserProfile from './components/UserProfile';
import TaskList from './components/TaskList';
import CommentSection from './components/CommentSection';
import AttachmentUploader from './components/AttachmentUploader';
import NotificationList from './components/NotificationList';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={UserProfile} />
        <PrivateRoute path="/tasks" component={TaskList} />
        <PrivateRoute path="/comments/:taskId" component={CommentSection} />
        <PrivateRoute path="/upload" component={AttachmentUploader} />
        <PrivateRoute path="/notifications" component={NotificationList} />
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