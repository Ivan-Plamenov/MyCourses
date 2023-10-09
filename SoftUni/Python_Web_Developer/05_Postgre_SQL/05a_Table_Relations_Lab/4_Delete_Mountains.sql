-- Create a table to store mountain data.
CREATE TABLE mountains (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);
-- Create a table to store peak data with a foreign key reference to the mountains table.
CREATE TABLE peaks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    mountain_id INT,
    CONSTRAINT fk_mountain_id FOREIGN KEY (mountain_id) REFERENCES mountains(id) ON DELETE CASCADE
);