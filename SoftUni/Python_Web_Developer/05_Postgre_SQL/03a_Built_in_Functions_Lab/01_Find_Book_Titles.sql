-- Retrieves book titles that start with 'The.'
SELECT title
FROM books
WHERE LEFT(title, 3) = 'The';