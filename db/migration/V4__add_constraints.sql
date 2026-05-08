-- Add check constraint for audit_logs action length
ALTER TABLE audit_logs ADD CONSTRAINT chk_audit_logs_action_length CHECK (char_length(action) <= 255);