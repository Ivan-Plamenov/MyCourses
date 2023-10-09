-- Retrieves a substring from the "description" column, starting from the 5th character.
SELECT SUBSTRING(
        description
        FROM 5
    ) AS substring
FROM currencies;