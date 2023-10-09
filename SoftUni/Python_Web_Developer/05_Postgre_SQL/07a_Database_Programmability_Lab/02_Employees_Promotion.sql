-- Create or replace a PostgreSQL stored procedure to increase salaries in a specific department
CREATE OR REPLACE PROCEDURE sp_increase_salaries(department_name VARCHAR) AS $$ BEGIN -- Update salaries for employees in the specified department by 5%
UPDATE employees
SET salary = salary + salary * 0.05
WHERE department_id = (
        SELECT d.department_id
        FROM employees AS e
            JOIN departments AS d USING(department_id)
        WHERE NAME = department_name
        GROUP BY d.department_id
    );
END $$ LANGUAGE plpgsql;