-- Create analytics table
CREATE TABLE analytics (
    analytics_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    event_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    event_data JSONB,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Index for quick lookup of analytics by user_id and event_type
CREATE INDEX idx_analytics_user_id_event_type ON analytics(user_id, event_type);