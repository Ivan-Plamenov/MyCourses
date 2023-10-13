-- Owners Table: Stores information about each animal owner with details like name, phone number, and address.
CREATE TABLE IF NOT EXISTS owners (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    address VARCHAR(50)
);
-- Animal Types Table: Stores different types of animals like 'dog', 'cat', etc.
CREATE TABLE IF NOT EXISTS animal_types (
    "id" SERIAL PRIMARY KEY,
    animal_type VARCHAR(30) NOT NULL
);
-- Cages Table: Stores information about cages with reference to the type of animal it's suitable for.
CREATE TABLE IF NOT EXISTS cages (
    "id" SERIAL PRIMARY KEY,
    animal_type_id INT NOT NULL,
    CONSTRAINT fk_cages_animal_types FOREIGN KEY (animal_type_id) REFERENCES animal_types("id") ON DELETE CASCADE ON UPDATE CASCADE
);
-- Animals Table: Contains details of each animal, its owner, and its type.
CREATE TABLE IF NOT EXISTS animals (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    birthdate DATE NOT NULL,
    owner_id INT,
    animal_type_id INT NOT NULL,
    CONSTRAINT fk_animals_owners FOREIGN KEY (owner_id) REFERENCES owners("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_animals_animal_types FOREIGN KEY (animal_type_id) REFERENCES animal_types("id") ON DELETE CASCADE ON UPDATE CASCADE
);
-- Volunteers Departments Table: Defines different departments where volunteers can be associated.
CREATE TABLE IF NOT EXISTS volunteers_departments (
    "id" SERIAL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);
-- Volunteers Table: Contains details of volunteers, the animal they're associated with, and their department.
CREATE TABLE IF NOT EXISTS volunteers (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    address VARCHAR(50),
    animal_id INT,
    department_id INT NOT NULL,
    CONSTRAINT fk_volunteers_animals FOREIGN KEY (animal_id) REFERENCES animals("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_volunteers_volunteers_departments FOREIGN KEY (department_id) REFERENCES volunteers_departments("id") ON DELETE CASCADE ON UPDATE CASCADE
);
-- Animals Cages Table: A junction table mapping which animal is in which cage.
CREATE TABLE IF NOT EXISTS animals_cages (
    cage_id INT NOT NULL,
    animal_id INT NOT NULL,
    CONSTRAINT fk_animals_cages_cages FOREIGN KEY (cage_id) REFERENCES cages("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_animals_cages_animals FOREIGN KEY (animal_id) REFERENCES animals("id") ON DELETE CASCADE ON UPDATE CASCADE
);