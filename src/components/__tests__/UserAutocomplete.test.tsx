import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserAutocomplete from '../UserAutocomplete';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{ id: 1, username: 'testuser' }] }))
}));

describe('UserAutocomplete', () => {
  test('renders input field', () => {
    render(<UserAutocomplete />);
    const inputElement = screen.getByPlaceholderText(/search users.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('fetches and displays suggestions', async () => {
    render(<UserAutocomplete />);
    const inputElement = screen.getByPlaceholderText(/search users.../i);
    fireEvent.change(inputElement, { target: { value: 'tes' } });

    const suggestion = await screen.findByText(/testuser/i);
    expect(suggestion).toBeInTheDocument();
  });
});
