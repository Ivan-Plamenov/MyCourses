-- Calculate the total deposit interest for each deposit group, ordered by interest amount in descending order.
SELECT deposit_group,
    SUM(deposit_interest) AS "Deposit Interest"
FROM wizard_deposits
GROUP BY deposit_group
ORDER BY "Deposit Interest" DESC;