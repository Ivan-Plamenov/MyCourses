-- Calculates the area of triangles using their sides and heights.
SELECT id,
    side * height / 2 AS area
FROM triangles;