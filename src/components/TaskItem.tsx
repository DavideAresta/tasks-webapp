import React from 'react';
import styled from 'styled-components';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    description: string;
  };
}

const TaskItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <TaskItemContainer>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </TaskItemContainer>
  );
};

export default TaskItem;
