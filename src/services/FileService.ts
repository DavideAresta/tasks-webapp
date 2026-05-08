import axios from 'axios';

export const uploadFile = async (taskId: string, file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`/api/tasks/${taskId}/files`, formData);
  return response.data;
};