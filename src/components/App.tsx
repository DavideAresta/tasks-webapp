import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Notifications from './pages/Notifications';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/notifications' component={Notifications} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
