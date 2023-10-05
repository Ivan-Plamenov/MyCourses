CREATE VIEW continent_currency_usage AS
SELECT continent_code,
    currency_code,
    COUNT(country_code) AS currency_usage
FROM countries
GROUP BY continent_code,
    currency_code
HAVING COUNT(country_code) > 1
ORDER BY currency_usage DESC;