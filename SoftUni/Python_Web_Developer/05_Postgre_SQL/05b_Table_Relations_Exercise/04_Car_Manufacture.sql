-- Create the "manufacturers" table with an automatically incremented primary key
CREATE TABLE manufacturers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);
-- Create the "models" table with an automatically incremented primary key
CREATE TABLE models (
    id INT GENERATED ALWAYS AS IDENTITY (START WITH 1000 INCREMENT BY 1) PRIMARY KEY,
    model_name VARCHAR(30),
    manufacturer_id INT,
    CONSTRAINT fk_models_manufacturers FOREIGN KEY(manufacturer_id) REFERENCES manufacturers(id)
);
-- Create the "production_years" table with an automatically incremented primary key
CREATE TABLE production_years (
    id SERIAL PRIMARY KEY,
    established_on DATE,
    manufacturer_id INT,
    CONSTRAINT fk_production_years_manufacturers FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);
-- Insert data into the "manufacturers" table
INSERT INTO manufacturers (name)
VALUES ('BMW'),
    ('Tesla'),
    ('Lada');
-- Insert data into the "production_years" table
INSERT INTO production_years (established_on, manufacturer_id)
VALUES ('1916-03-01', 1),
    ('2003-01-01', 2),
    ('1966-05-01', 3);
-- Insert data into the "models" table
INSERT INTO models (model_name, manufacturer_id)
VALUES ('X1', 1),
    ('i6', 1),
    ('Model S', 2),
    ('Model X', 2),
    ('Model 3', 2),
    ('Nova', 3);