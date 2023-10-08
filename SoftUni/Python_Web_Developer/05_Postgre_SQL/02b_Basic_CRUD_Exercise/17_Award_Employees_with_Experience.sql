-- Increases the salary by 1500 and adds "Senior" to the job title
-- for employees hired between January 1, 1998, and January 5, 2000.
UPDATE employees
SET salary = salary + 1500,
    job_title = 'Senior ' || job_title
WHERE hire_date >= '1998-01-01'
    AND hire_date <= '2000-01-05';