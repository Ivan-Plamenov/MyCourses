-- Calculate the average salary for each department and sort the results by department ID.
SELECT department_id,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
ORDER BY department_id;