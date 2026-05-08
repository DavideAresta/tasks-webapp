-- Create audit_log table
CREATE TABLE audit_log (
    log_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    action VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE SET NULL
);

-- Index for quick lookup by user_id
CREATE INDEX idx_audit_log_user_id ON audit_log(user_id);