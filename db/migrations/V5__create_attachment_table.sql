-- Create attachment table
CREATE TABLE attachment (
    attachment_id SERIAL PRIMARY KEY,
    task_id INT NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES task(task_id) ON DELETE CASCADE
);

-- Index for quick lookup by task_id
CREATE INDEX idx_attachment_task_id ON attachment(task_id);