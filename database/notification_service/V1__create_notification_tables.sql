-- Create tables for notification management

CREATE TABLE notification (
    notification_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('email', 'real_time')),
    status VARCHAR(50) NOT NULL CHECK (status IN ('unread', 'read')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE INDEX idx_notification_status ON notification(status);
CREATE INDEX idx_notification_type ON notification(type);