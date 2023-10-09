-- Count the number of notes containing 'Dumbledore' for each last name in the wizard_deposits table.
SELECT last_name,
    COUNT(*) AS "Notes with Dumbledore"
FROM wizard_deposits
WHERE notes ILIKE '%Dumbledore%'
GROUP BY last_name
ORDER BY last_name;