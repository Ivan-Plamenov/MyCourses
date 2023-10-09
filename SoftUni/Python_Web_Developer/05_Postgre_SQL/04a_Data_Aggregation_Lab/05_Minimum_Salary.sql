-- Find the minimum salary within each department and sort the results by department ID.
SELECT department_id,
    MIN(salary) AS min_salary
FROM employees
GROUP BY department_id
ORDER BY department_id;