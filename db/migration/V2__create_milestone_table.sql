-- Create milestone table
CREATE TABLE milestone (
    milestone_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    due_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL CHECK (status IN ('not_started', 'in_progress', 'completed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES project(project_id) ON DELETE CASCADE
);

-- Index for quick lookup by project and status
CREATE INDEX idx_milestone_project_status ON milestone(project_id, status);