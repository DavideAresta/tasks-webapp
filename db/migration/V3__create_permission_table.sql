-- Create permission table
CREATE TABLE permission (
    permission_id SERIAL PRIMARY KEY,
    permission_name VARCHAR(100) NOT NULL UNIQUE
);

-- Index for quick lookup by permission name
CREATE INDEX idx_permission_permission_name ON permission(permission_name);