-- Updates the "iso_code" column with the first 3 characters of "country_name" in uppercase if it is currently NULL.
UPDATE countries
SET iso_code = UPPER(SUBSTRING(country_name, 1, 3))
WHERE iso_code IS NULL;