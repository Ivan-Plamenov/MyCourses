-- Extract date and time components (Year, Month, Day, Hour, Minute, Second) from the "booked_at" column, adjusted to UTC.
SELECT EXTRACT(
        YEAR
        FROM booked_at
    ) AS "Year",
    EXTRACT(
        MONTH
        FROM booked_at
    ) AS "Month",
    EXTRACT(
        DAY
        FROM booked_at
    ) AS "Day",
    EXTRACT(
        HOUR
        FROM booked_at AT TIME ZONE 'UTC'
    ) AS "Hour",
    EXTRACT(
        MINUTE
        FROM booked_at AT TIME ZONE 'UTC'
    ) AS "Minute",
    CEIL(
        EXTRACT(
            SECOND
            FROM booked_at AT TIME ZONE 'UTC'
        )
    ) AS "Second"
FROM bookings;