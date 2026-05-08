-- Create task table
CREATE TABLE task (
    task_id SERIAL PRIMARY KEY,
    milestone_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    priority INT CHECK (priority BETWEEN 1 AND 5),
    status VARCHAR(50) NOT NULL CHECK (status IN ('not_started', 'in_progress', 'completed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (milestone_id) REFERENCES milestone(milestone_id) ON DELETE CASCADE
);

-- Index for quick lookup by milestone and priority
CREATE INDEX idx_task_milestone_priority ON task(milestone_id, priority);