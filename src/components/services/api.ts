export const fetchUser = async () => {
  const response = await fetch('/api/user');
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};

export const fetchTasks = async () => {
  const response = await fetch('/api/tasks');
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

export const fetchNotifications = async () => {
  const response = await fetch('/api/notifications');
  if (!response.ok) throw new Error('Failed to fetch notifications');
  return response.json();
};
