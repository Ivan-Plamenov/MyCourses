-- Create a PostgreSQL stored procedure to increase an employee's salary by 5% based on their ID
CREATE PROCEDURE sp_increase_salary_by_id(id INT) AS $$ BEGIN -- Check if the employee with the given ID exists
IF (
    SELECT salary
    FROM employees
    WHERE employee_id = id
) IS NULL THEN -- If the employee doesn't exist, return without making changes
RETURN;
ELSE -- If the employee exists, update their salary by increasing it by 5%
UPDATE employees
SET salary = salary + salary * 0.05
WHERE employee_id = id;
END IF;
-- Commit the transaction
COMMIT;
END;
$$ LANGUAGE plpgsql;