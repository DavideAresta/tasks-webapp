import React, { useState } from 'react';
import styled from 'styled-components';
import { AttachmentService } from '../services/AttachmentService';

const UploadContainer = styled.div`
  padding: 20px;
`;

const AttachmentUploader: React.FC = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    AttachmentService.uploadFile(file)
      .then(() => {
        setUploading(false);
        setFile(null);
      })
      .catch(err => {
        setError(err);
        setUploading(false);
      });
  };

  return (
    <UploadContainer>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>Upload</button>
      {uploading && <div>Uploading...</div>}
      {error && <div>Error uploading file</div>}
    </UploadContainer>
  );
};

export default AttachmentUploader;