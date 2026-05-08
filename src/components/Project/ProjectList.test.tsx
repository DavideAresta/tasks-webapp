import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectList } from './ProjectList';

jest.mock('../../services/ProjectService', () => ({
  ProjectService: {
    getProjects: jest.fn().mockResolvedValue([{ id: 1, name: 'Test Project' }])
  }
}));

test('renders project list', async () => {
  render(<ProjectList />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  const projectItem = await screen.findByText(/Test Project/i);
  expect(projectItem).toBeInTheDocument();
});
