import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProjectList } from './components/Project/ProjectList';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projects" component={ProjectList} />
        {/* Additional routes can be added here */}
      </Switch>
    </Router>
  );
};

export default App;
