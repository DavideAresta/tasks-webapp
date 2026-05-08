-- Create custom field table
CREATE TABLE custom_field (
    field_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    field_name VARCHAR(255) NOT NULL,
    field_value TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES project(project_id) ON DELETE CASCADE
);

-- Index for quick lookup by project
CREATE INDEX idx_custom_field_project ON custom_field(project_id);