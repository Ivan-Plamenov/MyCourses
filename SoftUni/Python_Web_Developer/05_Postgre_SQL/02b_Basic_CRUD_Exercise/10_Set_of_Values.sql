-- Selects employees (IDs 200 and 250) and their projects (excluding IDs 50 and 100).
SELECT employee_id,
    project_id
FROM employees_projects
WHERE employee_id IN (200, 250)
    AND project_id NOT IN (50, 100);