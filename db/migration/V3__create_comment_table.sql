-- Create comment table
CREATE TABLE comment (
    comment_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    parent_comment_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY (parent_comment_id) REFERENCES comment(comment_id) ON DELETE CASCADE
);

-- Index for fetching comments by user
CREATE INDEX idx_comment_user_id ON comment(user_id);
-- Index for threaded comments
CREATE INDEX idx_comment_parent_comment_id ON comment(parent_comment_id);