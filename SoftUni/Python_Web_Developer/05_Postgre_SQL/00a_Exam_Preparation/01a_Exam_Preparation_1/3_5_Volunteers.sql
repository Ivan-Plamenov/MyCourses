-- Retrieve Volunteers' Details: Fetches the name, phone number, address, associated animal ID, and department ID for each volunteer.
-- The results are ordered first by the volunteer's name, then by their associated animal ID, and finally by their department ID.
SELECT "name",
    phone_number,
    address,
    animal_id,
    department_id
FROM volunteers
ORDER BY "name",
    animal_id,
    department_id;