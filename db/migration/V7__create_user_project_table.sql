-- Create user_project table
CREATE TABLE user_project (
    user_id INT NOT NULL,
    project_id INT NOT NULL,
    PRIMARY KEY (user_id, project_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES project(project_id) ON DELETE CASCADE
);

-- Index for quick lookup by user_id
CREATE INDEX idx_user_project_user_id ON user_project(user_id);