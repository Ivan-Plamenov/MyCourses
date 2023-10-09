-- Calculate the age difference (interval) between "starts_at" and "booked_at" timestamps as "Early Birds."
SELECT user_id,
    AGE(starts_at, booked_at) AS "Early Birds"
FROM bookings
WHERE AGE(starts_at, booked_at) >= INTERVAL '10 months';