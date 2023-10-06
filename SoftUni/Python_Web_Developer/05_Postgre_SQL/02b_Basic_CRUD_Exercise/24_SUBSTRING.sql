-- Creates a view named "view_initials" with columns "initial" and "last_name,"
-- showing the first two letters of the first name and the last name of employees, ordered by last name.
CREATE VIEW view_initials AS
SELECT SUBSTRING(first_name, 1, 2) AS "initial",
    last_name
FROM employees
ORDER BY last_name;