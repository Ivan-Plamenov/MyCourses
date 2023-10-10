-- Delete board games associated with publishers linked to addresses from towns starting with 'L'
DELETE FROM board_games
WHERE publisher_id IN (
        SELECT id
        FROM publishers
        WHERE address_id IN (
                SELECT id
                FROM addresses
                WHERE town LIKE 'L%'
            )
    );
-- Delete publishers associated with addresses from towns starting with 'L'
DELETE FROM publishers
WHERE address_id IN (
        SELECT id
        FROM addresses
        WHERE town LIKE 'L%'
    );
-- Finally, delete addresses from towns starting with 'L'
DELETE FROM addresses
WHERE town LIKE 'L%';