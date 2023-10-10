-- Delete clients who meet the specified criteria
DELETE FROM clients
WHERE LENGTH(full_name) > 3
    AND id NOT IN (
        SELECT DISTINCT client_id
        FROM courses
    );