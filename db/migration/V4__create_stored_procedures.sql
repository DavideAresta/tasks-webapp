-- Stored procedure to update task status
CREATE OR REPLACE FUNCTION update_task_status(p_task_id INT, p_status VARCHAR) RETURNS VOID AS $$
BEGIN
    UPDATE tasks SET status = p_status, updated_at = CURRENT_TIMESTAMP WHERE task_id = p_task_id;
END;
$$ LANGUAGE plpgsql;