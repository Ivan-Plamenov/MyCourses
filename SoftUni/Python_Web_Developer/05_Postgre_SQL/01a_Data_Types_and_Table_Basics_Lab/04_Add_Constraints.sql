-- Modifies columns in the "employees" table:
-- 1. Makes the "salary" column NOT NULL and sets its default value to 0.
-- 2. Makes the "hiring_date" column NOT NULL.
ALTER TABLE employees
ALTER COLUMN salary
SET NOT NULL,
    ALTER COLUMN salary
SET DEFAULT 0,
    ALTER COLUMN hiring_date
SET NOT NULL;