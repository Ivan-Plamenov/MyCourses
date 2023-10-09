-- Replaces 'The' with '***' in book titles starting with 'The'
-- and orders the results by ID.
SELECT REPLACE(title, 'The', '***')
FROM books
WHERE LEFT(title, 3) = 'The'
ORDER BY ID;