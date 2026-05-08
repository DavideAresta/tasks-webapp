-- Seed data for initial setup
INSERT INTO users (username, email, password_hash) VALUES
('john_doe', 'john@example.com', 'hashed_password_1'),
('jane_doe', 'jane@example.com', 'hashed_password_2');

INSERT INTO products (name, description, price) VALUES
('Product A', 'Description for product A', 19.99),
('Product B', 'Description for product B', 29.99);