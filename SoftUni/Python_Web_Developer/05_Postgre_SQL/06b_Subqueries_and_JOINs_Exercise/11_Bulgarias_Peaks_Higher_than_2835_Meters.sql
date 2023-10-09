-- Retrieve mountain peaks in Bulgaria with elevations greater than 2835 meters
SELECT mc.country_code AS "country_code",
    m.mountain_range AS "mountain_range",
    p.peak_name AS "peak_name",
    p.elevation AS "elevation"
FROM mountains_countries AS mc
    JOIN mountains AS m ON mc.mountain_id = m.id
    JOIN peaks AS p ON m.id = p.mountain_id
WHERE mc.country_code = 'BG'
    AND p.elevation > 2835
ORDER BY p.elevation DESC;