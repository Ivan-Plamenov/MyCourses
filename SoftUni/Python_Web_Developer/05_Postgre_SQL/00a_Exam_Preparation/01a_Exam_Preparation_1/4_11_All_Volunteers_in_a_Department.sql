-- Function to Retrieve the Number of Volunteers from a Specified Department: Creates (or replaces if exists) a PL/pgSQL function named `fn_get_volunteers_count_from_department`. The function takes the name of a volunteers department as input and returns the count of volunteers associated with that department.
CREATE OR REPLACE FUNCTION fn_get_volunteers_count_from_department(searched_volunteers_department VARCHAR(30)) RETURNS INT AS $$
DECLARE count_value INT;
BEGIN -- Count the number of volunteers associated with the given department name
SELECT COUNT(v.id) INTO count_value
FROM volunteers AS v
    JOIN volunteers_departments AS vd ON v.department_id = vd."id"
WHERE vd.department_name = searched_volunteers_department;
-- Return the count value
RETURN count_value;
END;
$$ LANGUAGE plpgsql;
-- Execute the function to get the count of volunteers for specific departments
SELECT fn_get_volunteers_count_from_department('Education program assistant');
SELECT fn_get_volunteers_count_from_department('Guest engagement');
SELECT fn_get_volunteers_count_from_department('Zoo events');