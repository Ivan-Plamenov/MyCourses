-- Updates the condition of cars to 'C' if:
-- 1. They have mileage >= 800,000 or mileage is not specified.
-- 2. They were manufactured on or before 2010.
-- 3. The car make isn't 'Mercedes-Benz'.
UPDATE cars
SET "condition" = 'C'
WHERE (
        mileage >= 800000
        OR mileage IS NULL
    )
    AND "year" <= 2010
    AND make != 'Mercedes-Benz';