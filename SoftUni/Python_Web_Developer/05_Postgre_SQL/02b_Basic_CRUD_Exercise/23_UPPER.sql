-- Updates project names to be in uppercase.
UPDATE projects
SET name = UPPER(name);