-- Create tables for collaboration features

CREATE TABLE comment (
    comment_id SERIAL PRIMARY KEY,
    task_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES task(task_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE attachment (
    attachment_id SERIAL PRIMARY KEY,
    task_id INT NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES task(task_id)
);

CREATE INDEX idx_comment_task ON comment(task_id);
CREATE INDEX idx_attachment_task ON attachment(task_id);