-- Create a CTE to find the highest peaks in each country along with their details
WITH CountryHighestPeak AS (
    SELECT co.country_name,
        p.peak_name,
        p.elevation,
        m.mountain_range,
        ROW_NUMBER() OVER(
            PARTITION BY co.country_name
            ORDER BY p.elevation DESC
        ) AS rnk
    FROM countries co
        LEFT JOIN mountains_countries mc ON co.country_code = mc.country_code
        LEFT JOIN peaks p ON mc.mountain_id = p.mountain_id
        LEFT JOIN mountains m ON p.mountain_id = m.id
) -- Select the highest peaks for each country, handling cases where no highest peak is found
SELECT chp.country_name,
    COALESCE(chp.peak_name, '(no highest peak)') AS peak_name,
    COALESCE(chp.elevation, 0) AS elevation,
    COALESCE(chp.mountain_range, '(no mountain)') AS mountain_range
FROM CountryHighestPeak chp
WHERE chp.rnk = 1
ORDER BY chp.country_name ASC,
    chp.elevation DESC;