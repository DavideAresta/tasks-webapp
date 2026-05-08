-- Create tables for Workflow Service

CREATE TABLE workflows (
    workflow_id SERIAL PRIMARY KEY,
    workflow_name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE workflow_transitions (
    transition_id SERIAL PRIMARY KEY,
    workflow_id INT NOT NULL,
    from_status VARCHAR(50) NOT NULL,
    to_status VARCHAR(50) NOT NULL,
    FOREIGN KEY (workflow_id) REFERENCES workflows(workflow_id) ON DELETE CASCADE
);

-- Indexes for performance
CREATE INDEX idx_workflow_transitions_workflow_id ON workflow_transitions(workflow_id);
