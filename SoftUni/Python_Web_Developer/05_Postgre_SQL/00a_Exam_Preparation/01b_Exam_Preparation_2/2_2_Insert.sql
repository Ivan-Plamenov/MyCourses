-- Inserts records into the 'clients' table based on entries in the 'drivers' table.
-- For each driver with an ID between 10 and 20:
INSERT INTO clients (full_name, phone_number)
SELECT CONCAT(d.first_name, ' ', d.last_name),
    '(088) 9999' || (d."id" * 2)
FROM drivers AS d
WHERE d."id" BETWEEN 10 AND 20;