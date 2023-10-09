-- Calculate the total salaries for each department and order the results by department ID.
SELECT department_id,
    SUM(salary) AS total_salaries
FROM employees
GROUP BY department_id
ORDER BY department_id;