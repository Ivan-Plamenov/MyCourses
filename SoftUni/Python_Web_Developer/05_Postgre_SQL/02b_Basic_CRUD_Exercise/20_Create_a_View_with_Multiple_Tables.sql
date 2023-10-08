-- Creates a view named "view_addresses" to show employee full names, department IDs,
-- and formatted addresses by joining data from employees and addresses tables.
CREATE VIEW view_addresses AS
SELECT CONCAT(e.first_name, ' ', e.last_name) AS "Full Name",
    e.department_id,
    a.number || ' ' || a.street AS "Address"
FROM employees e
    JOIN addresses a ON e.address_id = a.id
ORDER BY "Address";