-- Replaces 'a' with '@' and 'A' with '$' in the "mountain_range" column.
SELECT REPLACE(mountain_range, 'a', '@') AS replace_a,
    REPLACE(mountain_range, 'A', '$') AS replace_A
FROM mountains;