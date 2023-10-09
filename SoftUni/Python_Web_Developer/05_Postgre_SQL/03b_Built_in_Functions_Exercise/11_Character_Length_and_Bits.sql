-- Combines "mountain_range" and "peak_name" with spaces,
-- calculates character length, and computes the number of bits in the resulting string.
SELECT CONCAT_WS(' ', m.mountain_range, p.peak_name) AS "Mountain Information",
    CHAR_LENGTH(CONCAT_WS(' ', m.mountain_range, p.peak_name)) AS "Characters Length",
    BIT_LENGTH(CONCAT_WS(' ', m.mountain_range, p.peak_name)) AS "Bits of a String"
FROM mountains AS m,
    peaks AS p
WHERE m."id" = p.mountain_id;