-- Update the "condition" of cars meeting the specified criteria
UPDATE cars
SET condition = 'C'
WHERE (
        mileage >= 800000
        OR mileage IS NULL
    )
    AND year <= 2010
    AND make <> 'Mercedes-Benz';