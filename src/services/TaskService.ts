import axios from 'axios';

export const TaskService = {
  getTasks: async () => {
    const response = await axios.get('/api/tasks');
    return response.data;
  },
  createTask: async (task) => {
    const response = await axios.post('/api/tasks', task);
    return response.data;
  },
  updateTask: async (taskId, updates) => {
    const response = await axios.put(`/api/tasks/${taskId}`, updates);
    return response.data;
  },
  deleteTask: async (taskId) => {
    const response = await axios.delete(`/api/tasks/${taskId}`);
    return response.data;
  }
};