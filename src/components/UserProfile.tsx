import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UserService } from '../services/UserService';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const UserProfile: React.FC = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    UserService.getUserProfile()
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <ProfileContainer>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </ProfileContainer>
  );
};

export default UserProfile;