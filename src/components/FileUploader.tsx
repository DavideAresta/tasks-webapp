import React, { useState } from 'react';
import styled from 'styled-components';
import { uploadFile } from '../services/FileService';

const UploadContainer = styled.div`
  padding: 20px;
`;

const FileUploader: React.FC<{ taskId: string }> = ({ taskId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    try {
      await uploadFile(taskId, file);
    } catch (err) {
      setError(err);
    } finally {
      setUploading(false);
    }
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

export default FileUploader;