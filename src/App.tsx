import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProjectList } from './components/ProjectList';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ProjectList} />
      </Switch>
    </Router>
  );
};

export default App;
