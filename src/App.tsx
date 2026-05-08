import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
          <Routes />
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
};

export default App;
