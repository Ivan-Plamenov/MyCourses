-- Create a PostgreSQL stored procedure to transfer money from one account to another
CREATE OR REPLACE PROCEDURE sp_transfer_money(
        sender_id INT,
        receiver_id INT,
        amount DECIMAL(19, 4)
    ) LANGUAGE plpgsql AS $$
DECLARE sender_balance DECIMAL(19, 4);
BEGIN -- Check the balance of the sender
SELECT balance INTO sender_balance
FROM accounts
WHERE id = sender_id;
-- If insufficient funds, raise an exception
IF sender_balance < amount THEN RAISE NOTICE 'Insufficient balance to withdraw %',
amount;
RETURN;
-- Exit the procedure
END IF;
-- Call the withdrawal procedure for the sender
CALL sp_withdraw_money(sender_id, amount);
-- Call the deposit procedure for the receiver
CALL sp_deposit_money(receiver_id, amount);
EXCEPTION
WHEN OTHERS THEN -- If an exception occurs, rollback the transaction
ROLLBACK;
RAISE;
-- Re-raise the exception to inform the caller
END;
$$;