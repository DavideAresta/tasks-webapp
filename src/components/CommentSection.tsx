import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommentService } from '../services/CommentService';

const CommentContainer = styled.div`
  padding: 20px;
`;

const CommentSection: React.FC<{ taskId: string }> = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    CommentService.getComments(taskId)
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [taskId]);

  if (loading) return <div>Loading comments...</div>;
  if (error) return <div>Error loading comments</div>;

  return (
    <CommentContainer>
      {comments.map(comment => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </CommentContainer>
  );
};

export default CommentSection;