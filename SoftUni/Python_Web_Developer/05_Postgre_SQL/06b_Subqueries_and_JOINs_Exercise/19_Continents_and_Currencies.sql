-- 50 / 100
-- Create a view to list currencies used in multiple countries within continents and rank their usage
CREATE VIEW continent_currency_usage AS WITH RankedCurrencyUsage AS (
    -- Count currency usage within each continent and rank them by usage
    SELECT continent_code,
        currency_code,
        COUNT(*) AS currency_usage,
        DENSE_RANK() OVER (
            PARTITION BY continent_code
            ORDER BY COUNT(*) DESC
        ) AS rnk
    FROM countries
    GROUP BY continent_code,
        currency_code
    HAVING COUNT(*) > 1
) -- Select and order currency usage information
SELECT continent_code,
    currency_code,
    currency_usage
FROM RankedCurrencyUsage
ORDER BY currency_usage DESC;