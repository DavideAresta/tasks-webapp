import axios from 'axios';
import { Task } from '../types';

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get('/api/tasks');
  return response.data;
};
