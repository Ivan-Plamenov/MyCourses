-- Retrieve users with companion names containing "and" (case-insensitive) and non-Gmail email addresses.
SELECT companion_full_name,
    email
FROM users
WHERE companion_full_name ILIKE '%aNd%'
    AND email NOT LIKE '%@gmail';