import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectList } from '../components/ProjectList';
import { ProjectService } from '../services/ProjectService';

jest.mock('../services/ProjectService');

const mockProjects = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' }
];

beforeEach(() => {
  (ProjectService.getProjects as jest.Mock).mockResolvedValue(mockProjects);
});

test('renders project list', async () => {
  render(<ProjectList />);
  const projectItems = await screen.findAllByText(/Project/);
  expect(projectItems).toHaveLength(2);
});
