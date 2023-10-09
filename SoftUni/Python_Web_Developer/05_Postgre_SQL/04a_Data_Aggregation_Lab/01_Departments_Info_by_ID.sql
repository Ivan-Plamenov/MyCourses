-- Count the number of employees in each department and order the results by department ID.
SELECT department_id,
    COUNT(*)
FROM employees
GROUP BY department_id
ORDER BY department_id;