import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../services/taskService';
import styled from 'styled-components';

const TaskListContainer = styled.div`
  padding: 20px;
`;

const TaskItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
        <TaskItem key={task.id}>{task.name}</TaskItem>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
