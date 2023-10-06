-- Creates a new table named "company_chart" based on employee information,
-- including full names, job titles, department IDs, and manager IDs.
CREATE TABLE company_chart AS
SELECT CONCAT(first_name, ' ', last_name) AS "Full Name",
    job_title AS "Job Title",
    department_id AS "Department ID",
    manager_id AS "Manager ID"
FROM employees;