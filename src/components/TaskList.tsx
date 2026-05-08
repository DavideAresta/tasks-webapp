```tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Task } from '../types';
import { fetchTasks } from '../services/taskService';
import { TaskService } from '../services/TaskService';
import TaskItem from './TaskItem';

const TaskContainer = styled.div`
  padding: 20px;
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        // Using both service approaches - prefer the newer TaskService
        const data = await TaskService.getTasks();
        setTasks(data);
      } catch (err) {
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error loading tasks</div>;
  if (tasks.length === 0) return <div>No tasks available</div>;

  return (
    <TaskContainer>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskContainer>
  );
};

export default TaskList;
```