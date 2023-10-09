-- Create the "mountains" table.
CREATE TABLE mountains (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);
-- Create the "peaks" table with a foreign key reference to mountains.
CREATE TABLE peaks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    mountain_id INT,
    CONSTRAINT fk_peaks_mountains FOREIGN KEY (mountain_id) REFERENCES mountains (id)
);