-- Create the "manufacturers" table
CREATE TABLE manufacturers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE
);
-- Create the "models" table
CREATE TABLE models (
    id SERIAL PRIMARY KEY,
    model_name VARCHAR(100),
    manufacturer_id INT,
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);
-- Create the "production_years" table
CREATE TABLE production_years (
    id SERIAL PRIMARY KEY,
    established_on DATE,
    manufacturer_id INT,
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);
-- Set the starting value for the "models" table's identifier to 1000
SELECT setval(
        pg_get_serial_sequence('models', 'id'),
        1000,
        false
    );
-- Insert data into the "manufacturers" table
INSERT INTO manufacturers (name)
VALUES ('BMW'),
    ('Tesla'),
    ('Lada');
-- Insert data into the "models" table
INSERT INTO models (model_name, manufacturer_id)
VALUES ('X1', 1),
    ('i6', 1),
    ('Model S', 2),
    ('Model X', 2),
    ('Model 3', 2),
    ('Nova', 3);
-- Insert data into the "production_years" table
INSERT INTO production_years (established_on, manufacturer_id)
VALUES ('1916-03-01', 1),
    ('2003-01-01', 2),
    ('1966-05-01', 3);