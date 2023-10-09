-- Creates or replaces a view named "view_river_info" to display information about rivers,
-- including their names, outflows, and lengths in kilometers, ordered by river name.
CREATE OR REPLACE VIEW view_river_info AS
SELECT CONCAT(
        'The river ',
        river_name,
        ' flows into the ',
        outflow,
        ' and is ',
        length,
        ' kilometers long.'
    ) AS "River Information"
FROM rivers
ORDER BY river_name;