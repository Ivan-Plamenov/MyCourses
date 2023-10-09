-- Translates special characters in the "capital" column to their regular counterparts.
SELECT capital,
    TRANSLATE(capital, 'áãåçéíñóú', 'aaaceinou') AS translated_name
FROM countries;