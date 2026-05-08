import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tasks" component={TaskList} />
        <Route path="/" exact component={() => <div>Welcome to the Task Manager</div>} />
      </Switch>
    </Router>
  );
};

export default App;
