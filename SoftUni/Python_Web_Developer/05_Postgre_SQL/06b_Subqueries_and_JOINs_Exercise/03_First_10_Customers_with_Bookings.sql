SELECT b.booking_id,
    b.starts_at::date AS "Start Date",
    b.apartment_id AS "Apartment ID",
    concat(c.first_name, ' ', c.last_name) "Customer Name"
FROM bookings b
    RIGHT JOIN customers c USING(customer_id)
ORDER BY "Customer Name"
LIMIT 10;