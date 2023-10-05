-- Sets default values for columns "age," "name," and "code" in the "minions_info" table.
ALTER TABLE minions_info
ALTER COLUMN age
SET DEFAULT 0,
    ALTER COLUMN name
SET DEFAULT '',
    ALTER COLUMN code
SET DEFAULT '';