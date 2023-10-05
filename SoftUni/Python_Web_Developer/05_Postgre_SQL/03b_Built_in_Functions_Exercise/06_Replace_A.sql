SELECT REPLACE(mountain_range, 'a', '@') AS replace_a,
    REPLACE(replace(mountain_range, 'A', '$'), 'a', '@') AS replace_A
FROM mountains;