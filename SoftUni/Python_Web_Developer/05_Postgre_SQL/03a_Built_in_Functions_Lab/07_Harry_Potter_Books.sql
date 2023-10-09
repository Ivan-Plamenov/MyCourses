-- Retrieves book titles that start with 'Harry Potter' and orders them by ID.
SELECT title
FROM books
WHERE title LIKE 'Harry Potter%'
ORDER BY id;