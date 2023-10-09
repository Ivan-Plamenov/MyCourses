-- Retrieve apartment addresses and the number of nights booked
SELECT CONCAT(a.address, ' ', a.address_2) AS "Apartment Address",
    b.booked_for AS "Nights"
FROM apartments AS a
    JOIN bookings AS b ON a.booking_id = b.booking_id
ORDER BY a.apartment_id ASC;