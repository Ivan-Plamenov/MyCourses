-- Extract details of regular clients with the second letter 'a' in their full name
WITH RegularClients AS (
    SELECT c.full_name,
        COUNT(DISTINCT co.car_id) AS count_of_cars,
        SUM(co.bill) AS total_sum
    FROM clients c
        JOIN courses co ON c.id = co.client_id
    WHERE SUBSTRING(c.full_name, 2, 1) = 'a'
    GROUP BY c.full_name
    HAVING COUNT(DISTINCT co.car_id) > 1
)
SELECT full_name,
    count_of_cars,
    total_sum
FROM RegularClients
ORDER BY full_name;