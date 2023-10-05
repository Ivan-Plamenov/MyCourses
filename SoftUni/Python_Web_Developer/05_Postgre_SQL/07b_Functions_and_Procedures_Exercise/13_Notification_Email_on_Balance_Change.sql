-- Create the "notification_emails" table
CREATE TABLE notification_emails (
    id SERIAL PRIMARY KEY,
    recipient_id INT,
    subject VARCHAR(255),
    body TEXT
);
-- Create the trigger function "trigger_fn_send_email_on_balance_change"
CREATE OR REPLACE FUNCTION trigger_fn_send_email_on_balance_change() RETURNS TRIGGER AS $$ BEGIN -- Insert a new row into the "notification_emails" table
INSERT INTO notification_emails (recipient_id, subject, body)
VALUES (
        NEW.account_id,
        'Balance change for account: ' || NEW.account_id,
        'On ' || CURRENT_DATE || ' your balance was changed from ' || OLD.old_sum || ' to ' || NEW.new_sum || '.'
    );
-- Return the trigger result
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Create the trigger "tr_send_email_on_balance_change" on the "logs" table
CREATE TRIGGER tr_send_email_on_balance_change
AFTER
UPDATE ON logs FOR EACH ROW
    WHEN (OLD.new_sum <> NEW.new_sum) EXECUTE FUNCTION trigger_fn_send_email_on_balance_change();