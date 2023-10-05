SELECT companion_full_name,
    email
FROM users
WHERE ILIKE(companion_full_name, '%aNd%')
    AND NOT (email ILIKE '%@gmail%');