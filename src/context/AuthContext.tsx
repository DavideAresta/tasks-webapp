import React, { createContext, useContext, useState } from 'react';
import { login as loginService } from '../services/authService';

interface AuthContextProps {
  login: (username: string, password: string) => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      setError(null);
      await loginService(username, password);
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <AuthContext.Provider value={{ login, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
