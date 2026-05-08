import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchTasks } from '../services/TaskService';

const TaskContainer = styled.div`
  padding: 20px;
`;

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading tasks</div>;

  return (
    <TaskContainer>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </TaskContainer>
  );
};

export default TaskManager;