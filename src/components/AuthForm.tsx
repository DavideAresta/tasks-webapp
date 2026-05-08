import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../services/AuthService';

const FormContainer = styled.div`
  padding: 20px;
`;

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(username, password);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          aria-label="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          aria-label="Password"
        />
        <button type="submit" disabled={loading}>Login</button>
      </form>
      {loading && <div>Logging in...</div>}
      {error && <div>Error logging in</div>}
    </FormContainer>
  );
};

export default AuthForm;