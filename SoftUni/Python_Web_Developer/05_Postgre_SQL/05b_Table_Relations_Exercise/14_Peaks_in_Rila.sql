-- Retrieve mountain range, peak names, and elevations for peaks in the 'Rila' mountain range
SELECT m.mountain_range,
    p.peak_name,
    p.elevation
FROM mountains AS m
    INNER JOIN peaks AS p ON m.id = p.mountain_id
WHERE m.mountain_range = 'Rila'
ORDER BY p.elevation DESC;