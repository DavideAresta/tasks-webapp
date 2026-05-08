-- Create task_comment association table
CREATE TABLE task_comment (
    task_id INT NOT NULL,
    comment_id INT NOT NULL,
    PRIMARY KEY (task_id, comment_id),
    FOREIGN KEY (task_id) REFERENCES task(task_id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES comment(comment_id) ON DELETE CASCADE
);