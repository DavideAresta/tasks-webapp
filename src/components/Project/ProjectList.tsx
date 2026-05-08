import React, { useEffect, useState } from 'react';
import { ProjectService } from '../../services/ProjectService';
import styled from 'styled-components';

const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const ProjectItem = styled.div`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ProjectService.getProjects()
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <ProjectListContainer>
      {projects.map(project => (
        <ProjectItem key={project.id}>{project.name}</ProjectItem>
      ))}
    </ProjectListContainer>
  );
};
