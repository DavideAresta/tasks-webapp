-- Create task_file association table
CREATE TABLE task_file (
    task_id INT NOT NULL,
    file_id INT NOT NULL,
    PRIMARY KEY (task_id, file_id),
    FOREIGN KEY (task_id) REFERENCES task(task_id) ON DELETE CASCADE,
    FOREIGN KEY (file_id) REFERENCES file(file_id) ON DELETE CASCADE
);