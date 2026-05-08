import axios from 'axios';

export const fetchComments = async (taskId: string) => {
  const response = await axios.get(`/api/tasks/${taskId}/comments`);
  return response.data;
};