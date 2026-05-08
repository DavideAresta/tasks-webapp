import axios from 'axios';

export const NotificationService = {
  getNotifications: async () => {
    const response = await axios.get('/api/notifications');
    return response.data;
  },
  updatePreferences: async (preferences) => {
    const response = await axios.put('/api/notifications/preferences', preferences);
    return response.data;
  }
};