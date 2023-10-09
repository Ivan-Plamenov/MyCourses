-- Create the "monasteries" table to store monastery information
CREATE TABLE monasteries(
    id SERIAL PRIMARY KEY,
    monastery_name VARCHAR(255),
    country_code CHAR(2)
);
-- Insert data into the "monasteries" table
INSERT INTO monasteries (monastery_name, country_code)
VALUES ('Rila Monastery "St. Ivan of Rila"', 'BG'),
    ('Bachkovo Monastery "Virgin Mary"', 'BG'),
    (
        'Troyan Monastery "Holy Mother''s Assumption"',
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
-- Add a new column "three_rivers" to the "countries" table and set its default value to False
ALTER TABLE countries
ADD COLUMN three_rivers BOOLEAN DEFAULT False;
-- Update the "three_rivers" column to True for countries with at least three rivers
UPDATE countries
SET three_rivers = True
WHERE (
        SELECT count(country_code) >= 3
        FROM countries_rivers AS cr
        WHERE cr.country_code = countries.country_code
    );
-- Retrieve monastery names and country names for countries without at least three rivers
SELECT m.monastery_name,
    c.country_name
FROM monasteries AS m
    JOIN countries AS c USING (country_code)
WHERE c.three_rivers = False
ORDER BY m.monastery_name;