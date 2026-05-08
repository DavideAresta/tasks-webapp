-- Create role table
CREATE TABLE role (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

-- Index for quick lookup by role name
CREATE INDEX idx_role_role_name ON role(role_name);