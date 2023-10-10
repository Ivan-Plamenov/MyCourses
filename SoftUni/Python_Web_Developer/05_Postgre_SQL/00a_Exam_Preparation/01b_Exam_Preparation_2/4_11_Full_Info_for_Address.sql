-- Create the search_results table if it doesn't exist
CREATE TABLE IF NOT EXISTS search_results (
    id SERIAL PRIMARY KEY,
    address_name VARCHAR(50),
    full_name VARCHAR(100),
    level_of_bill VARCHAR(20),
    make VARCHAR(30),
    condition CHAR(1),
    category_name VARCHAR(50)
);
-- Create or replace the procedure
CREATE OR REPLACE PROCEDURE sp_courses_by_address(p_address_name VARCHAR(100)) LANGUAGE plpgsql AS $$ BEGIN -- Clear existing data in the search_results table
    TRUNCATE search_results;
-- Insert matching data into the search_results table
INSERT INTO search_results (
        address_name,
        full_name,
        level_of_bill,
        make,
        condition,
        category_name
    )
SELECT a.name AS address_name,
    cl.full_name,
    CASE
        WHEN c.bill <= 20 THEN 'Low'
        WHEN c.bill <= 30 THEN 'Medium'
        ELSE 'High'
    END AS level_of_bill,
    car.make,
    car.condition,
    cat.name AS category_name
FROM courses c
    JOIN addresses a ON c.from_address_id = a.id
    JOIN clients cl ON c.client_id = cl.id
    JOIN cars car ON c.car_id = car.id
    JOIN categories cat ON car.category_id = cat.id
WHERE a.name = p_address_name
ORDER BY car.make,
    cl.full_name;
END;
$$;