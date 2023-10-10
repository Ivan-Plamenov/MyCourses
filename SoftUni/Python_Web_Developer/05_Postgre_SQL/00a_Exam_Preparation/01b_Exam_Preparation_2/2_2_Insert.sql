-- Insert records into the "clients" table for drivers with "id" between 10 and 20
INSERT INTO clients (full_name, phone_number)
SELECT CONCAT(first_name, ' ', last_name) AS full_name,
    '(088) 9999' || (id * 2) AS phone_number
FROM drivers
WHERE id BETWEEN 10 AND 20;