import axios from 'axios';

export const fetchUserProfile = async (userId: string) => {
  const response = await axios.get(`/api/users/${userId}`);
  return response.data;
};