SELECT magic_wand_creator,
    MIN(magic_wand_size) AS "Minimum Wand Size"
FROM wizard_deposits
WHERE magic_wand_creator IS NOT NULL
GROUP BY magic_wand_creator
ORDER BY "Minimum Wand Size" ASC
LIMIT 5;