-- Add foreign key constraints for tasks to users
ALTER TABLE tasks ADD COLUMN assigned_user_id INT;
ALTER TABLE tasks ADD FOREIGN KEY (assigned_user_id) REFERENCES users(user_id) ON DELETE SET NULL;