-- Stored Procedure to Retrieve Owner of Specified Animal (Using Output Parameter): This procedure named `sp_animals_with_owners_or_not_1` retrieves the owner's name for a given animal name. If the animal doesn't have an owner, it returns 'For adoption'.
CREATE OR REPLACE PROCEDURE sp_animals_with_owners_or_not_1(
        IN animal_name VARCHAR(30),
        OUT owner_name TEXT
    ) LANGUAGE plpgsql AS $$ BEGIN
SELECT COALESCE(o."name", 'For adoption') INTO owner_name
FROM animals AS a
    LEFT JOIN owners AS o ON a.owner_id = o."id"
WHERE a."name" = animal_name;
END;
$$;
-- Execute the procedure for three different animals to retrieve their owner's name or 'For adoption'
CALL sp_animals_with_owners_or_not_1('Pumpkinseed Sunfish', '');
CALL sp_animals_with_owners_or_not_1('Hippo', '');
CALL sp_animals_with_owners_or_not_1('Brown bear', '');
-- Stored Procedure to Display Owner of Specified Animal Using NOTICE: This procedure named `sp_animals_with_owners_or_not_2` retrieves the owner's name for a given animal name and displays it using a NOTICE. If the animal doesn't have an owner, it displays 'For adoption'.
CREATE OR REPLACE PROCEDURE sp_animals_with_owners_or_not_2(animal_name VARCHAR(30)) LANGUAGE plpgsql AS $$
DECLARE owner_name TEXT;
BEGIN
SELECT COALESCE(o."name", 'For adoption') INTO owner_name
FROM animals AS a
    LEFT JOIN owners AS o ON a.owner_id = o."id"
WHERE a."name" = animal_name;
RAISE NOTICE 'Owner of animal %: %',
animal_name,
owner_name;
END;
$$;
-- Execute the procedure for three different animals to display their owner's name or 'For adoption' using a NOTICE
CALL sp_animals_with_owners_or_not_2('Pumpkinseed Sunfish');
CALL sp_animals_with_owners_or_not_2('Hippo');
CALL sp_animals_with_owners_or_not_2('Brown bear');