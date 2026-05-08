import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchProjects } from '../services/ProjectService';

const ListContainer = styled.div`
  padding: 20px;
`;

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <ListContainer>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default ProjectList;