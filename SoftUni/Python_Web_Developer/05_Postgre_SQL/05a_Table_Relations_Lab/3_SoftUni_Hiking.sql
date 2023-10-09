-- Select route information including start and end points, and the leader's name.
SELECT r.start_point,
    r.end_point,
    r.leader_id,
    CONCAT(c.first_name, ' ', c.last_name) AS leader_name
FROM routes AS r
    JOIN campers AS c ON r.leader_id = c.id;