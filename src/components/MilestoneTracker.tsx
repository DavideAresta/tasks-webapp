import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchMilestones } from '../services/MilestoneService';

const MilestoneContainer = styled.div`
  padding: 20px;
`;

const MilestoneTracker: React.FC = () => {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMilestones = async () => {
      try {
        const data = await fetchMilestones();
        setMilestones(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadMilestones();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading milestones</div>;

  return (
    <MilestoneContainer>
      <ul>
        {milestones.map(milestone => (
          <li key={milestone.id}>{milestone.name}</li>
        ))}
      </ul>
    </MilestoneContainer>
  );
};

export default MilestoneTracker;