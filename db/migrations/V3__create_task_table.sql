-- Create task table
CREATE TABLE task (
    task_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL CHECK (status IN ('pending', 'in_progress', 'completed')),
    assigned_to INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (assigned_to) REFERENCES user(user_id) ON DELETE SET NULL
);

-- Index for quick lookup by status
CREATE INDEX idx_task_status ON task(status);

-- Index for quick lookup by assigned_to
CREATE INDEX idx_task_assigned_to ON task(assigned_to);