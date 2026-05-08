import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
