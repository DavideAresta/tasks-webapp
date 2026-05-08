-- Index for fast user lookup by username
CREATE INDEX idx_users_username ON users(username);

-- Index for fast role lookup by role_name
CREATE INDEX idx_roles_role_name ON roles(role_name);

-- Index for fast permission lookup by permission_name
CREATE INDEX idx_permissions_permission_name ON permissions(permission_name);

-- Index for fast audit log retrieval by user_id and timestamp
CREATE INDEX idx_audit_logs_user_id_timestamp ON audit_logs(user_id, timestamp);