import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const LoginForm: React.FC = () => {
  const { login, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await login(username, password);
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit} aria-label="Login Form">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        aria-label="Username"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        aria-label="Password"
      />
      <Button type="submit" disabled={loading} aria-busy={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Form>
  );
};

export default LoginForm;
