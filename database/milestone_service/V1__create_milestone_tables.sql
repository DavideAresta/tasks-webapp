-- Create tables for Milestone Service

CREATE TABLE milestones (
    milestone_id SERIAL PRIMARY KEY,
    milestone_name VARCHAR(100) NOT NULL,
    project_id INT NOT NULL,
    due_date DATE,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);

CREATE INDEX idx_milestones_project_id ON milestones(project_id);
