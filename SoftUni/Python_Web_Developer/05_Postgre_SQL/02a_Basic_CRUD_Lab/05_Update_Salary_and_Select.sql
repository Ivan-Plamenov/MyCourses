-- Raises the salary of 'Manager' employees by 100
-- and retrieves all records of 'Manager' employees.
UPDATE employees
SET salary = salary + 100
WHERE job_title = 'Manager';
SELECT *
FROM employees
WHERE job_title = 'Manager';