-- Count employees with a salary greater than the average salary
SELECT COUNT(*)
FROM employees
WHERE salary > (
        SELECT AVG(salary)
        FROM employees
    );