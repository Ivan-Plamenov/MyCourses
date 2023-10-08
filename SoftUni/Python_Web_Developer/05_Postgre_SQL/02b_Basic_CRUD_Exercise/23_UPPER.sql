-- Converts project names to uppercase.
UPDATE projects
SET name = UPPER(name);