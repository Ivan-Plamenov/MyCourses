-- Creates a table named "minions" with columns: "id," "name," and "age."
CREATE TABLE IF NOT EXISTS minions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    age INTEGER
);