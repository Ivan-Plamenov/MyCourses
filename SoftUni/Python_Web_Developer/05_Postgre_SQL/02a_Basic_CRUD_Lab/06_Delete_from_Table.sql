-- Removes employees from departments 1 and 2, and retrieves all employee records.
DELETE FROM employees
WHERE department_id BETWEEN 1 AND 2;
SELECT *
FROM employees;