--26/30
CREATE TABLE IF NOT EXISTS towns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);
CREATE TABLE IF NOT EXISTS stadiums (
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    capacity INTEGER CHECK (capacity > 0) NOT NULL,
    town_id INTEGER NOT NULL,
    CONSTRAINT fk_stadiums_towns FOREIGN KEY (town_id) REFERENCES towns(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    established DATE NOT NULL,
    fan_base INTEGER DEFAULT 0 CHECK (fan_base >= 0) NOT NULL,
    stadium_id INTEGER NOT NULL,
    CONSTRAINT fk_teams_stadiums FOREIGN KEY (stadium_id) REFERENCES stadiums(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS coaches (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    salary NUMERIC(10, 2) DEFAULT 0 CHECK (salary >= 0) NOT NULL,
    coach_level INTEGER DEFAULT 0 CHECK (coach_level >= 0) NOT NULL
);
CREATE TABLE IF NOT EXISTS skills_data (
    id SERIAL PRIMARY KEY,
    dribbling INTEGER DEFAULT 0,
    pace INTEGER DEFAULT 0,
    passing INTEGER DEFAULT 0,
    shooting INTEGER DEFAULT 0,
    speed INTEGER DEFAULT 0,
    strength INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS players (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INTEGER DEFAULT 0 CHECK (age >= 0) NOT NULL,
    position CHAR(1) NOT NULL,
    salary NUMERIC(10, 2) DEFAULT 0 CHECK (salary >= 0) NOT NULL,
    hire_date TIMESTAMP,
    skills_data_id INTEGER NOT NULL,
    team_id INTEGER,
    CONSTRAINT fk_players_skills_data FOREIGN KEY (skills_data_id) REFERENCES skills_data(id) ON DELETE CASCADE,
    CONSTRAINT fk_players_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE
    SET NULL
);
CREATE TABLE IF NOT EXISTS players_coaches (
    player_id INTEGER,
    coach_id INTEGER,
    CONSTRAINT fk_players_coaches_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
    CONSTRAINT fk_players_coaches_coaches FOREIGN KEY (coach_id) REFERENCES coaches(id) ON DELETE CASCADE,
    PRIMARY KEY (player_id, coach_id)
);