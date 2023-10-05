CREATE OR REPLACE PROCEDURE sp_withdraw_money(
        account_id INT,
        money_amount NUMERIC(19, 4)
    ) LANGUAGE plpgsql AS $$
DECLARE current_balance NUMERIC(19, 4);
BEGIN -- Get the current balance of the account
SELECT "balance" INTO current_balance
FROM accounts
WHERE "id" = account_id;
-- Check if the account has enough balance to make the withdrawal
IF current_balance >= money_amount THEN -- Subtract the withdrawn amount from the account's balance
UPDATE accounts
SET "balance" = "balance" - money_amount
WHERE "id" = account_id;
-- Commit the transaction to save the modifications
COMMIT;
ELSE -- Raise a notice indicating insufficient balance
RAISE NOTICE 'Insufficient balance to withdraw %.4f',
money_amount;
END IF;
END;
$$;