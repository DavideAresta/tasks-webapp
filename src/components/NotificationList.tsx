import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NotificationService } from '../services/NotificationService';

const NotificationContainer = styled.div`
  padding: 20px;
`;

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    NotificationService.getNotifications()
      .then(data => {
        setNotifications(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading notifications...</div>;
  if (error) return <div>Error loading notifications</div>;

  return (
    <NotificationContainer>
      {notifications.map(notification => (
        <div key={notification.id}>{notification.message}</div>
      ))}
    </NotificationContainer>
  );
};

export default NotificationList;