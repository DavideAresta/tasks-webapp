import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import TaskList from './components/TaskList';
import CommentSection from './components/CommentSection';
import AttachmentUploader from './components/AttachmentUploader';
import NotificationList from './components/NotificationList';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={UserProfile} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/comments/:taskId" component={CommentSection} />
        <Route path="/upload" component={AttachmentUploader} />
        <Route path="/notifications" component={NotificationList} />
      </Switch>
    </Router>
  );
};

export default App;