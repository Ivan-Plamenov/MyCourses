-- Calculate the total salary for each department and filter for departments with a total salary less than 4200, then sort by department ID.
SELECT department_id,
    SUM(salary) AS "Total Salary"
FROM employees
GROUP BY department_id
HAVING SUM(salary) < 4200
ORDER BY department_id;