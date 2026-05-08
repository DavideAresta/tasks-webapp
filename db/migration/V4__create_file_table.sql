-- Create file table
CREATE TABLE file (
    file_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    file_size INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

-- Index for fetching files by user
CREATE INDEX idx_file_user_id ON file(user_id);