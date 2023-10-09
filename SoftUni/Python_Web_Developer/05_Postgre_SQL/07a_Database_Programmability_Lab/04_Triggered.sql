-- Create a table to store deleted employee records
DROP TABLE IF EXISTS deleted_employees;
CREATE TABLE deleted_employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    middle_name VARCHAR(20),
    job_title VARCHAR(50),
    department_id INT,
    salary NUMERIC(19, 4)
);
-- Define a PostgreSQL trigger function to back up fired employees
CREATE OR REPLACE FUNCTION backup_fired_employees() RETURNS TRIGGER AS $$ BEGIN -- Insert the deleted employee's information into the backup table
INSERT INTO deleted_employees(
        first_name,
        last_name,
        middle_name,
        job_title,
        department_id,
        salary
    )
VALUES (
        OLD.first_name,
        OLD.last_name,
        OLD.middle_name,
        OLD.job_title,
        OLD.department_id,
        OLD.salary
    );
-- Return the new employee (not used in this case)
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Create a trigger to execute the backup function after an employee is deleted
CREATE OR REPLACE TRIGGER backup_employees
AFTER DELETE ON employees FOR EACH ROW EXECUTE PROCEDURE backup_fired_employees();