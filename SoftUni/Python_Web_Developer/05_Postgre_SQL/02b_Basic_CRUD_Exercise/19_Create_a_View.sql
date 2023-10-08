-- Creates a view named "view_company_chart" to display employee full names and job titles
-- for employees managed by an employee with ID 184.
CREATE VIEW view_company_chart AS
SELECT "Full Name",
    "Job Title"
FROM company_chart
WHERE "Manager ID" = 184;