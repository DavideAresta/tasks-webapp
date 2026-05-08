-- Index for quick lookup of projects by name
CREATE INDEX idx_projects_name ON projects(name);

-- Index for quick lookup of milestones by project_id
CREATE INDEX idx_milestones_project_id ON milestones(project_id);

-- Index for quick lookup of tasks by milestone_id
CREATE INDEX idx_tasks_milestone_id ON tasks(milestone_id);

-- Index for quick lookup of users by username
CREATE INDEX idx_users_username ON users(username);