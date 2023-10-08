-- Updates project end dates to be 5 months after their start dates
-- for projects with a NULL end date.
UPDATE projects
SET "end_date" = "start_date" + INTERVAL '5 months'
WHERE "end_date" IS NULL;