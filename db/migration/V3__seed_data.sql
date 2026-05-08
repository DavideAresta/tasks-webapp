-- Seed initial workflow data
INSERT INTO workflows (name, description) VALUES
('Standard Workflow', 'A standard workflow for task management'),
('Advanced Workflow', 'An advanced workflow with additional steps');

-- Seed initial user data
INSERT INTO users (username, password_hash, email) VALUES
('admin', 'hashed_password', 'admin@example.com'),
('user1', 'hashed_password', 'user1@example.com');