import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchTasks } from '../services/api';

const TasksContainer = styled.div`
  padding: 20px;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const taskData = await fetchTasks();
        setTasks(taskData);
      } catch (err) {
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <TasksContainer>
      <h2>Your Tasks</h2>
      <TaskList>
        {tasks.map((task: any) => (
          <TaskItem key={task.id}>{task.title}</TaskItem>
        ))}
      </TaskList>
    </TasksContainer>
  );
};

export default Tasks;
