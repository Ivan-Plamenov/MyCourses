-- Retrieve booking details for customers without an assigned apartment
SELECT b.booking_id,
    b.apartment_id,
    c.companion_full_name
FROM bookings AS b
    JOIN customers AS c USING(customer_id)
WHERE apartment_id IS NULL;