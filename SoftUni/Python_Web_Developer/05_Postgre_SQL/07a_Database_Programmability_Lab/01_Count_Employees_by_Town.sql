-- Create or replace a PostgreSQL function to count employees in a specific town
CREATE OR REPLACE FUNCTION fn_count_employees_by_town(town_name VARCHAR) RETURNS INT AS $$
DECLARE BEGIN -- Return the count of employees residing in the specified town
    RETURN (
        SELECT COUNT(*)
        FROM employees AS e
            JOIN addresses AS a USING(address_id)
            JOIN towns AS t USING(town_id)
        WHERE t.NAME = town_name
    );
END $$ LANGUAGE plpgsql;