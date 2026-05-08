-- Create team_member table
CREATE TABLE team_member (
    team_member_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    team_id INT NOT NULL,
    role VARCHAR(50) NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES team(team_id) ON DELETE CASCADE
);

-- Index for quick lookup by user_id
CREATE INDEX idx_team_member_user_id ON team_member(user_id);

-- Index for quick lookup by team_id
CREATE INDEX idx_team_member_team_id ON team_member(team_id);