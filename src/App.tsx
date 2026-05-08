import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/" exact component={TaskList} />
      </Switch>
    </Router>
  );
};

export default App;
