import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchNotifications } from '../services/NotificationService';

const BellContainer = styled.div`
  position: relative;
`;

const NotificationBell: React.FC = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadNotifications();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading notifications</div>;

  return (
    <BellContainer>
      <button aria-label="Notifications">
        🔔
        {notifications.length > 0 && <span>{notifications.length}</span>}
      </button>
    </BellContainer>
  );
};

export default NotificationBell;