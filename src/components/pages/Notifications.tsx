import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchNotifications } from '../services/api';

const NotificationsContainer = styled.div`
  padding: 20px;
`;

const NotificationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NotificationItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const notificationData = await fetchNotifications();
        setNotifications(notificationData);
      } catch (err) {
        setError('Failed to load notifications');
      } finally {
        setLoading(false);
      }
    };
    loadNotifications();
  }, []);

  if (loading) return <p>Loading notifications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <NotificationsContainer>
      <h2>Your Notifications</h2>
      <NotificationList>
        {notifications.map((notification: any) => (
          <NotificationItem key={notification.id}>{notification.message}</NotificationItem>
        ))}
      </NotificationList>
    </NotificationsContainer>
  );
};

export default Notifications;
