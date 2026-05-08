-- Create notification table
CREATE TABLE notification (
    notification_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('real_time', 'email')),
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

-- Index for quick lookup by user_id
CREATE INDEX idx_notification_user_id ON notification(user_id);

-- Index for quick lookup by type
CREATE INDEX idx_notification_type ON notification(type);