-- Deletes clients who:
-- 1. Do not have any associated courses.
-- 2. Have a full name longer than 3 characters.
DELETE FROM clients AS cl
WHERE NOT EXISTS (
        SELECT 1
        FROM courses AS cou
        WHERE cou.client_id = cl."id"
    )
    AND LENGTH(cl.full_name) > 3;