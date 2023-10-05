-- Creates the "minions_birthdays" table with columns "id," "name," "date_of_birth," "age," "present," and "party."
CREATE TABLE IF NOT EXISTS minions_birthdays (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    age INTEGER,
    present VARCHAR(100),
    party TIMESTAMPTZ
);