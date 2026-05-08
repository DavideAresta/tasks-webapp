import axios from 'axios';

export const CommentService = {
  getComments: async (taskId) => {
    const response = await axios.get(`/api/tasks/${taskId}/comments`);
    return response.data;
  },
  createComment: async (taskId, comment) => {
    const response = await axios.post(`/api/tasks/${taskId}/comments`, comment);
    return response.data;
  },
  updateComment: async (commentId, updates) => {
    const response = await axios.put(`/api/comments/${commentId}`, updates);
    return response.data;
  },
  deleteComment: async (commentId) => {
    const response = await axios.delete(`/api/comments/${commentId}`);
    return response.data;
  }
};