-- Creates a table named "minions" if it doesn't exist, with columns "id," "name," and "age."
CREATE TABLE IF NOT EXISTS minions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    age INTEGER
);