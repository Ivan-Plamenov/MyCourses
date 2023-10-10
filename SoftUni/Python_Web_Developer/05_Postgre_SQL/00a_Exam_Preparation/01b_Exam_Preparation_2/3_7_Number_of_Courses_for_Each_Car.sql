-- Retrieve information about cars, count of courses, and average bill
WITH CourseInfo AS (
    SELECT c.id AS car_id,
        c.make,
        c.mileage,
        COUNT(co.id) AS count_of_courses,
        ROUND(AVG(co.bill)::numeric, 2) AS average_bill
    FROM cars c
        LEFT JOIN courses co ON c.id = co.car_id
    GROUP BY c.id,
        c.make,
        c.mileage
    HAVING COUNT(co.id) <> 2
)
SELECT car_id,
    make,
    mileage,
    count_of_courses,
    average_bill
FROM CourseInfo
ORDER BY count_of_courses DESC,
    car_id ASC;