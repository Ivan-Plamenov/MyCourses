-- Update Animals with No Owners: Assigns an owner with ID 4 to animals that currently do not have any associated owner.
UPDATE animals
SET owner_id = 4
WHERE owner_id IS NULL;