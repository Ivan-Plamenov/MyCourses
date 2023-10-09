-- Retrieves author last names and formatted date of birth.
SELECT last_name AS "Last NAME",
    TO_CHAR(born, 'DD (Dy) Mon YYYY') AS "Date of Birth"
FROM authors;