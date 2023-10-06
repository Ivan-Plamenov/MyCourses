-- Updates the "end_date" of projects with a NULL end date,
-- setting it to be 5 months after the "start_date."
UPDATE projects
SET "end_date" = "start_date" + INTERVAL '5 months'
WHERE "end_date" IS NULL;