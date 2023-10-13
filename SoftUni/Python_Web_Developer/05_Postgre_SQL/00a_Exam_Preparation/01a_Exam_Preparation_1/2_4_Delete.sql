-- Delete Volunteers from a Specific Department: Removes all volunteers associated with the department having ID 2.
DELETE FROM volunteers
WHERE department_id = 2;
-- Delete Specific Department: Removes the department with ID 2 from the volunteers_departments table and returns details of the deleted record.
DELETE FROM volunteers_departments
WHERE "id" = 2
RETURNING *;