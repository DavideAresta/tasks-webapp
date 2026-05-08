import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TaskService } from '../services/TaskService';

const TaskContainer = styled.div`
  padding: 20px;
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    TaskService.getTasks()
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error loading tasks</div>;

  return (
    <TaskContainer>
      {tasks.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </TaskContainer>
  );
};

export default TaskList;