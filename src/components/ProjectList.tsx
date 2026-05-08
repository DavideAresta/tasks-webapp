import React, { useEffect, useState } from 'react';
import { ProjectService } from '../services/ProjectService';
import styled from 'styled-components';

const ProjectListContainer = styled.div`
  padding: 20px;
`;

const ProjectItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

interface Project {
  id: number;
  name: string;
}

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ProjectService.getProjects()
      .then(setProjects)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (projects.length === 0) return <div>No projects found.</div>;

  return (
    <ProjectListContainer>
      {projects.map(project => (
        <ProjectItem key={project.id}>{project.name}</ProjectItem>
      ))}
    </ProjectListContainer>
  );
};
