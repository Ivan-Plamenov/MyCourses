-- Retrieves details of each course, including start address, whether it was during day or night, bill amount, client details, and car details. Results are ordered by the course ID.
SELECT a."name" AS address,
    CASE
        WHEN EXTRACT(
            HOUR
            FROM cou."start"
        ) BETWEEN 6 AND 20 THEN 'Day'
        ELSE 'Night'
    END AS day_time,
    cou.bill,
    cl.full_name,
    c.make,
    c.model,
    cat."name" AS category_name
FROM courses cou
    LEFT JOIN addresses a ON cou.from_address_id = a."id"
    LEFT JOIN clients cl ON cou.client_id = cl."id"
    LEFT JOIN cars c ON cou.car_id = c."id"
    LEFT JOIN categories cat ON c.category_id = cat."id"
ORDER BY cou."id";