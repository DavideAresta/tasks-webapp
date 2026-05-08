import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchAuditLogs } from '../services/AuditService';

const LogContainer = styled.div`
  padding: 20px;
`;

const AuditLog: React.FC = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const data = await fetchAuditLogs();
        setLogs(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadLogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading audit logs</div>;

  return (
    <LogContainer>
      <ul>
        {logs.map(log => (
          <li key={log.id}>{log.action}</li>
        ))}
      </ul>
    </LogContainer>
  );
};

export default AuditLog;