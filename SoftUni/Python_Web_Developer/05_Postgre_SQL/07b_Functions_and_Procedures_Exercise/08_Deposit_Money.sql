-- Create a PostgreSQL stored procedure to deposit money into a specific account
CREATE OR REPLACE PROCEDURE sp_deposit_money(
        account_id INT,
        money_amount NUMERIC(19, 4)
    ) LANGUAGE plpgsql AS $$ BEGIN -- Increase the account's balance by adding the deposited amount
UPDATE accounts
SET "balance" = "balance" + money_amount
WHERE "id" = account_id;
-- Commit the transaction to save the modifications
COMMIT;
END;
$$;