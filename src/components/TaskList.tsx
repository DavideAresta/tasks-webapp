import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchTasks } from '../services/taskService';
import TaskItem from './TaskItem';

const TaskListContainer = styled.div`
  padding: 20px;
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (tasks.length === 0) return <div>No tasks available</div>;

  return (
    <TaskListContainer>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
