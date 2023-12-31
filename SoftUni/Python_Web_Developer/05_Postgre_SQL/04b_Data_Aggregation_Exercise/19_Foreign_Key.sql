-- Creates a table for tracking employee-project relationships if it doesn't exist.
CREATE TABLE IF NOT EXISTS employees_projects (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    project_id INT,
    CONSTRAINT fk_employee FOREIGN KEY (employee_id) REFERENCES employees (id),
    CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES projects (id)
);