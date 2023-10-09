-- Calculate the total number of nights booked for each apartment and order the results by apartment name
SELECT a.name,
    SUM(b.booked_for) AS sum
FROM bookings AS b
    JOIN apartments AS a USING(apartment_id)
GROUP BY a.name
ORDER BY a.name;