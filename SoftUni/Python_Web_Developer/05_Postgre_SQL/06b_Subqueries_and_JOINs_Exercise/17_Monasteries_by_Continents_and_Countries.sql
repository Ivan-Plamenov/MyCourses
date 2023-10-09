-- Update the country name 'Myanmar' to 'Burma' in the "countries" table
UPDATE countries
SET country_name = 'Burma'
WHERE country_name = 'Myanmar';
-- Insert data into the "monasteries" table for 'Tanzania' and 'Burma'
INSERT INTO monasteries (monastery_name, country_code)
VALUES (
        'Hanga Abbey',
        (
            SELECT country_code
            FROM countries
            WHERE country_name = 'Tanzania'
        )
    ),
    (
        'Myin-Tin-Daik',
        (
            SELECT country_code
            FROM countries
            WHERE country_name = 'Burma'
        )
    );
-- Retrieve continent names, country names, and the count of monasteries for countries without at least three rivers
SELECT con.continent_name,
    c.country_name,
    count(m.id) AS monasteries_count
FROM continents AS con
    JOIN countries AS c USING (continent_code)
    LEFT JOIN monasteries AS m USING (country_code)
WHERE c.three_rivers = False
GROUP BY c.country_name,
    con.continent_name
ORDER BY monasteries_count DESC,
    c.country_name;