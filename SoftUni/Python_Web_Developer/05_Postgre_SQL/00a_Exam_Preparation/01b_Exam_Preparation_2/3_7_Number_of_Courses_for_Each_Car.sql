-- Retrieves car ID, make, mileage, number of courses (trips), and the average bill for each car. Only considers cars with a number of courses not equal to 2. Results are ordered by the number of courses in descending order and then by car ID.
SELECT c."id" AS car_id,
    c.make,
    c.mileage,
    COUNT(cou."id") AS count_of_courses,
    ROUND(AVG(cou.bill)::NUMERIC, 2) AS average_bill
FROM cars AS c
    LEFT JOIN courses AS cou ON cou.car_id = c."id"
GROUP BY c."id",
    c.make,
    c.mileage
HAVING COUNT(cou."id") != 2
ORDER BY count_of_courses DESC,
    car_id;