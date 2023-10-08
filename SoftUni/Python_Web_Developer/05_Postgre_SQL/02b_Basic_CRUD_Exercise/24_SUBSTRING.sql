-- Creates a view named "view_initials" to display employee initials and last names,
-- derived from the first two letters of their first names and ordered by last name.
CREATE VIEW view_initials AS
SELECT SUBSTRING(first_name, 1, 2) AS "initial",
    last_name
FROM employees
ORDER BY last_name;