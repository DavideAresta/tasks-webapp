-- Create comment table
CREATE TABLE comment (
    comment_id SERIAL PRIMARY KEY,
    task_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES task(task_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

-- Index for quick lookup by task_id
CREATE INDEX idx_comment_task_id ON comment(task_id);

-- Index for quick lookup by user_id
CREATE INDEX idx_comment_user_id ON comment(user_id);