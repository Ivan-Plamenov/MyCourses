SELECT CAST(
        REGEXP_REPLACE("River Information", '.*?([0-9]{1,4}).*', E'\\1') AS INTEGER
    ) AS river_length
FROM view_river_info;