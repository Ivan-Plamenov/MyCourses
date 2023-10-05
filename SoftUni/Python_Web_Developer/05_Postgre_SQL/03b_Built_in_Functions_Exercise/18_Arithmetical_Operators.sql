-- Create the "bookings_calculation" table and add columns
CREATE TABLE bookings_calculation (
    booked_for NUMERIC,
    multiplication NUMERIC,
    modulo NUMERIC
);
-- Populate the "multiplication" and "modulo" columns
INSERT INTO bookings_calculation (booked_for, multiplication, modulo)
SELECT booked_for,
    booked_for * 50 AS multiplication,
    booked_for % 50 AS modulo
FROM bookings
WHERE apartment_id = 93;