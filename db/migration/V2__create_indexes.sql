-- Create index on tasks status for quick lookup
CREATE INDEX idx_tasks_status ON tasks(status);

-- Create index on notifications sent_at for sorting
CREATE INDEX idx_notifications_sent_at ON notifications(sent_at);

-- Create index on audits changed_at for sorting
CREATE INDEX idx_audits_changed_at ON audits(changed_at);

-- Create index on auth_tokens expires_at for token expiration checks
CREATE INDEX idx_auth_tokens_expires_at ON auth_tokens(expires_at);