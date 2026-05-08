-- Stored procedure to log audit changes
CREATE OR REPLACE FUNCTION log_audit_change(task_id INT, change_description TEXT) RETURNS VOID AS $$
BEGIN
    INSERT INTO audit (task_id, change_description, changed_at) VALUES (task_id, change_description, CURRENT_TIMESTAMP);
END;
$$ LANGUAGE plpgsql;