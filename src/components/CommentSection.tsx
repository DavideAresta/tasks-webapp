import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchComments } from '../services/CommentService';

const CommentContainer = styled.div`
  padding: 20px;
`;

const CommentSection: React.FC<{ taskId: string }> = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchComments(taskId);
        setComments(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadComments();
  }, [taskId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;

  return (
    <CommentContainer>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </CommentContainer>
  );
};

export default CommentSection;