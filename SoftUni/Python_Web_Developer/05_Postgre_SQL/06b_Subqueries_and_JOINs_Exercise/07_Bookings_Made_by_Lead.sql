-- Retrieve booking details for apartments booked by customers with the job type 'Lead'
SELECT b.apartment_id,
    b.booked_for,
    c.first_name,
    c.country
FROM bookings AS b
    INNER JOIN customers AS c ON b.customer_id = c.customer_id
WHERE c.job_type = 'Lead';