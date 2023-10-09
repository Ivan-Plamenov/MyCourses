-- Calculate the average magic wand size from non-null values in the "wizard_deposits" table
SELECT ROUND(AVG(magic_wand_size), 3) AS "Average Magic Wand Size"
FROM wizard_deposits
WHERE magic_wand_size IS NOT NULL;