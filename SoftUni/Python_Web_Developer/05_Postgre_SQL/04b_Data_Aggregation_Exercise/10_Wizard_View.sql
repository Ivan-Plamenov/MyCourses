-- View for wizard deposits expiring before August 17, 1983.
CREATE OR REPLACE VIEW view_wizard_deposits_with_expiration_date_before_1983_08_17 AS
SELECT concat(first_name, ' ', last_name) AS "Wizard Name",
    deposit_start_date AS "Start Date",
    deposit_expiration_date AS "Expiration Date",
    deposit_amount AS "Amount"
FROM wizard_deposits
WHERE deposit_expiration_date <= '1983-08-17'::date
GROUP BY "Wizard Name",
    "Start Date",
    "Expiration Date",
    "Amount"
ORDER BY "Expiration Date";