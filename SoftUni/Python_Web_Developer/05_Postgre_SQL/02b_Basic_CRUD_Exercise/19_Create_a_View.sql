-- Creates a view named "view_company_chart" with columns "Full Name" and "Job Title"
-- based on the "company_chart" table.
CREATE VIEW view_company_chart AS
SELECT "Full Name",
    "Job Title"
FROM company_chart;