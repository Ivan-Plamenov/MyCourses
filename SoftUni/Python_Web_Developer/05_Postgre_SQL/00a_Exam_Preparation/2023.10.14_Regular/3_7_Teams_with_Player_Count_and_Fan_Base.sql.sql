--10/10
SELECT id AS team_id,
    name AS team_name,
    player_count,
    fan_base
FROM (
        SELECT t.id,
            t.name,
            COUNT(p.id) AS player_count,
            t.fan_base
        FROM teams AS t
            LEFT JOIN players AS p ON t.id = p.team_id
        GROUP BY t.id,
            t.name,
            t.fan_base
    ) AS subquery
WHERE fan_base > 30000
ORDER BY player_count DESC,
    fan_base DESC;