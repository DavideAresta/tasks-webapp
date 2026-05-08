-- Seed initial data for users
INSERT INTO users (username, password_hash, email) VALUES
('admin', 'hashed_password', 'admin@example.com'),
('user1', 'hashed_password', 'user1@example.com');