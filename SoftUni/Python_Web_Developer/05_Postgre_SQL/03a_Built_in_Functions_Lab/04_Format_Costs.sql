SELECT title,
    TRUNC(COST, 3) AS modified_price
FROM books
ORDER BY id