-- Create a PostgreSQL stored procedure to retrieve account holders with a balance higher than a specified amount
CREATE OR REPLACE PROCEDURE sp_retrieving_holders_with_balance_higher_than(searched_balance NUMERIC(19, 4)) LANGUAGE plpgsql AS $$
DECLARE holder_record RECORD;
total_balance NUMERIC(19, 4);
BEGIN -- Iterate through each account holder and calculate their total_balance
FOR holder_record IN
SELECT "holder_id"
FROM accounts
GROUP BY "holder_id" LOOP -- Calculate the total_balance for the current account holder
SELECT SUM("balance") INTO total_balance
FROM accounts
WHERE "holder_id" = holder_record."holder_id";
-- Check if total_balance is greater than searched_balance and raise a notification
IF total_balance > searched_balance THEN RAISE NOTICE '% % - %.4f',
(
    SELECT "first_name"
    FROM account_holders
    WHERE "id" = holder_record."holder_id"
),
(
    SELECT "last_name"
    FROM account_holders
    WHERE "id" = holder_record."holder_id"
),
total_balance;
END IF;
END LOOP;
END;
$$;