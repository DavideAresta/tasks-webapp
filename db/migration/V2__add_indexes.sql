-- Add index for task status
CREATE INDEX idx_task_status ON task(status);

-- Add index for workflow task_id
CREATE INDEX idx_workflow_task_id ON workflow(task_id);

-- Add index for audit task_id
CREATE INDEX idx_audit_task_id ON audit(task_id);