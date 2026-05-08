import axios from 'axios';

export const fetchMilestones = async () => {
  const response = await axios.get('/api/milestones');
  return response.data;
};