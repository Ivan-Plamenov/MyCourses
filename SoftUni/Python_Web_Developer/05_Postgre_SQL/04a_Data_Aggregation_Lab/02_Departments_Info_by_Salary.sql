-- Count the number of employees in each department based on their salaries and order the results by department ID.
SELECT department_id,
    COUNT(salary) AS employee_count
FROM employees
GROUP BY department_id
ORDER BY department_id;