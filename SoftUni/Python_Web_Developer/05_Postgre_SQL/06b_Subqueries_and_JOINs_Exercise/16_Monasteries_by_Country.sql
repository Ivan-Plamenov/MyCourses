-- Create the "monasteries" table
CREATE TABLE IF NOT EXISTS monasteries (
    id SERIAL PRIMARY KEY,
    monastery_name VARCHAR(255) NOT NULL,
    country_code CHAR(2) NOT NULL
);
-- Insert data into the "monasteries" table
INSERT INTO monasteries (monastery_name, country_code)
VALUES ('Rila Monastery St. Ivan of Rila', 'BG'),
    ('Bachkovo Monastery Virgin Mary', 'BG'),
    (
        'Troyan Monastery Holy Mother''s Assumption',
        'BG'
    ),
    ('Kopan Monastery', 'NP'),
    ('Thrangu Tashi Yangtse Monastery', 'NP'),
    ('Shechen Tennyi Dargyeling Monastery', 'NP'),
    ('Benchen Monastery', 'NP'),
    ('Southern Shaolin Monastery', 'CN'),
    ('Dabei Monastery', 'CN'),
    ('Wa Sau Toi', 'CN'),
    ('Lhunshigyia Monastery', 'CN'),
    ('Rakya Monastery', 'CN'),
    ('Monasteries of Meteora', 'GR'),
    ('The Holy Monastery of Stavronikita', 'GR'),
    ('Taung Kalat Monastery', 'MM'),
    ('Pa-Auk Forest Monastery', 'MM'),
    ('Taktsang Palphug Monastery', 'BT'),
    ('Sümela Monastery', 'TR');
-- Modify the "countries" table by adding a BOOLEAN column called "three_rivers" with a default value of false
ALTER TABLE countries
ADD COLUMN three_rivers BOOLEAN DEFAULT false;
-- Update the "three_rivers" column for countries that have more than three rivers
UPDATE countries
SET three_rivers = true
WHERE country_code IN (
        SELECT cr.country_code
        FROM countries_rivers AS cr
            JOIN rivers AS r ON cr.river_id = r.id
        GROUP BY cr.country_code
        HAVING COUNT(cr.river_id) > 3
    );
-- Retrieve the desired records
SELECT m.monastery_name,
    c.country_name AS country_name
FROM monasteries AS m
    JOIN countries AS c ON m.country_code = c.country_code
WHERE c.three_rivers = true
ORDER BY m.monastery_name;