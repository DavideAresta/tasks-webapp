import axios from 'axios';

export const UserService = {
  getUserProfile: async () => {
    const response = await axios.get('/api/user/profile');
    return response.data;
  },
  authenticateUser: async (credentials) => {
    const response = await axios.post('/api/user/authenticate', credentials);
    return response.data;
  },
  lookupTeamMembers: async () => {
    const response = await axios.get('/api/user/team');
    return response.data;
  }
};