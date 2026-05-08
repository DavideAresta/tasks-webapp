import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/userService';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(userId);
        setProfile(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <ProfileContainer>
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>
    </ProfileContainer>
  );
};

export default UserProfile;
