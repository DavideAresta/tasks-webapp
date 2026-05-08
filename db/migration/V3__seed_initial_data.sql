-- Seed initial roles
INSERT INTO roles (role_name) VALUES ('ADMIN'), ('USER');

-- Seed initial permissions
INSERT INTO permissions (permission_name) VALUES ('READ_PRIVILEGES'), ('WRITE_PRIVILEGES');