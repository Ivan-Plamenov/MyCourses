-- Create a PostgreSQL function to generate a full name from first and last names
CREATE OR REPLACE FUNCTION fn_full_name(
        first_name VARCHAR(50),
        last_name VARCHAR(50)
    ) RETURNS VARCHAR(100) AS $$
DECLARE full_name VARCHAR(100);
BEGIN -- Capitalize and concatenate first_name and last_name
CASE
    WHEN first_name IS NOT NULL
    AND last_name IS NOT NULL THEN full_name := INITCAP(first_name) || ' ' || INITCAP(last_name);
WHEN first_name IS NOT NULL THEN full_name := INITCAP(first_name);
WHEN last_name IS NOT NULL THEN full_name := INITCAP(last_name);
ELSE full_name := NULL;
END CASE
;
RETURN full_name;
END;
$$ LANGUAGE plpgsql;