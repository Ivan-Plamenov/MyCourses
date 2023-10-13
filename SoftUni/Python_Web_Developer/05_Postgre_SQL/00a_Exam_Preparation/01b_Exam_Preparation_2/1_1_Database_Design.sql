-- Table to store various addresses (like pickup or drop-off locations)
CREATE TABLE IF NOT EXISTS addresses (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL
);
-- Table to categorize cars (e.g., SUV, Sedan, etc.)
CREATE TABLE IF NOT EXISTS categories (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(10) NOT NULL
);
-- Table to store client details
CREATE TABLE IF NOT EXISTS clients (
    "id" SERIAL PRIMARY KEY,
    full_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);
-- Table to store driver's personal details
CREATE TABLE IF NOT EXISTS drivers (
    "id" SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INT NOT NULL,
    rating NUMERIC(3, 2) DEFAULT 5.5,
    CONSTRAINT drivers_age_check CHECK (age > 0)
);
-- Table to store cars' details with category relation
CREATE TABLE IF NOT EXISTS cars (
    "id" SERIAL PRIMARY KEY,
    make VARCHAR(20) NOT NULL,
    model VARCHAR(20),
    "year" INT DEFAULT 0 NOT NULL,
    mileage INT DEFAULT 0,
    "condition" CHAR(1) NOT NULL,
    -- (e.g., A: Excellent, B: Good, etc.)
    category_id INT NOT NULL,
    CONSTRAINT cars_year_check CHECK ("year" > 0),
    CONSTRAINT cars_mileage_check CHECK (mileage > 0),
    CONSTRAINT fk_cars_categories FOREIGN KEY (category_id) REFERENCES categories("id") ON DELETE CASCADE ON UPDATE CASCADE
);
-- Table to store details about individual taxi courses or rides
CREATE TABLE IF NOT EXISTS courses (
    "id" SERIAL PRIMARY KEY,
    from_address_id INT NOT NULL,
    -- start address for the course
    "start" TIMESTAMP NOT NULL,
    -- timestamp when the course started
    bill NUMERIC(10, 2) DEFAULT 10,
    -- billing amount
    car_id INT NOT NULL,
    client_id INT NOT NULL,
    CONSTRAINT courses_bill_check CHECK (bill > 0),
    CONSTRAINT fk_courses_addresses FOREIGN KEY (from_address_id) REFERENCES addresses("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_courses_cars FOREIGN KEY (car_id) REFERENCES cars("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_courses_clients FOREIGN KEY (client_id) REFERENCES clients("id") ON DELETE CASCADE ON UPDATE CASCADE
);
-- Associative table to establish many-to-many relationships between cars and drivers
-- Represents which drivers can drive which cars
CREATE TABLE IF NOT EXISTS cars_drivers (
    car_id INT NOT NULL,
    driver_id INT NOT NULL,
    CONSTRAINT fk_cars_drivers_cars FOREIGN KEY (car_id) REFERENCES cars("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_cars_drivers_drivers FOREIGN KEY (driver_id) REFERENCES drivers("id") ON DELETE CASCADE ON UPDATE CASCADE
);