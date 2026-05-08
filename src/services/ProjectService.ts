import axios from 'axios';

export const ProjectService = {
  getProjects: async () => {
    const response = await axios.get('/api/projects');
    return response.data;
  }
};
