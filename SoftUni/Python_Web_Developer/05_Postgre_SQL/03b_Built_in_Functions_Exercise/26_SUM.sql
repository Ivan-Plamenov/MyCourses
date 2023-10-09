-- Calculate the total sum of "booked_for" values for bookings associated with apartment_id 90.
SELECT SUM(booked_for) AS total_value
FROM bookings
WHERE apartment_id = 90;