import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const fetchUserData = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data', error);
    throw error;
  }
};
