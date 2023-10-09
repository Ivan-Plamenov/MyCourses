-- Retrieve all columns from the "departments" table joined with the "employees" table
SELECT *
FROM departments
    JOIN employees ON departments.id = employees.department_id;