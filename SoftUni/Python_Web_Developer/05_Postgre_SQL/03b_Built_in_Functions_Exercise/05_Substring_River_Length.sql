-- Extracts river lengths (numeric values) from the "River Information" column using regular expressions.
SELECT (
        REGEXP_MATCHES("River Information", '([0-9]{1,4})')
    ) [1] AS river_length
FROM view_river_info;