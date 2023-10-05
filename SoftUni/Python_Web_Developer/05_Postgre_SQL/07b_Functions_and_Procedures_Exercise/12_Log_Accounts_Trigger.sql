-- Create the "logs" table
CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    account_id INT,
    old_sum NUMERIC(19, 4),
    new_sum NUMERIC(19, 4)
);
-- Create the trigger function "trigger_fn_insert_new_entry_into_logs"
CREATE OR REPLACE FUNCTION trigger_fn_insert_new_entry_into_logs() RETURNS TRIGGER AS $$ BEGIN -- Check if the "balance" value of the old row is different from the new row
    IF OLD.balance <> NEW.balance THEN -- Insert a new row into the "logs" table
INSERT INTO logs (account_id, old_sum, new_sum)
VALUES (OLD.id, OLD.balance, NEW.balance);
END IF;
-- Return the new row
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Create the trigger "account_balance_change" on the "accounts" table
CREATE TRIGGER account_balance_change
AFTER
UPDATE ON accounts FOR EACH ROW EXECUTE FUNCTION trigger_fn_insert_new_entry_into_logs();