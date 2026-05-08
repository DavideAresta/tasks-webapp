import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserProfile from '../UserProfile';

jest.mock('../../services/userService', () => ({
  getUserProfile: jest.fn(() => Promise.resolve({ name: 'John Doe', email: 'john@example.com', role: 'Admin' }))
}));

test('renders user profile', async () => {
  render(<UserProfile userId="1" />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  const nameElement = await screen.findByText(/John Doe/i);
  expect(nameElement).toBeInTheDocument();
});
