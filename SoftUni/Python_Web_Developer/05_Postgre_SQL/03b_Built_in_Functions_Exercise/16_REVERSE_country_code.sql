-- Reverses and converts the "country_code" column to lowercase.
UPDATE countries
SET country_code = REVERSE(LOWER(country_code));