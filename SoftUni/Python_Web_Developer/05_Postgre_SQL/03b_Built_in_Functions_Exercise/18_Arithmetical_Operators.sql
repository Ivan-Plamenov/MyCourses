-- Create the "bookings_calculation" table and add columns
CREATE TABLE bookings_calculation -- Populate the "multiplication" and "modulo" columns
AS
SELECT booked_for,
    CAST(booked_for * 50 AS NUMERIC) AS multiplication,
    CAST(booked_for % 50 AS NUMERIC) AS modulo
FROM bookings
WHERE apartment_id = 93;