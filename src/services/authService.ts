import axios from 'axios';

export const login = async (username: string, password: string) => {
  const response = await axios.post('/api/auth/login', { username, password });
  if (response.status !== 200) {
    throw new Error('Login failed');
  }
  // Store token or handle login success
};
