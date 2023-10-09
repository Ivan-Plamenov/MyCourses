-- Calculate the average deposit interest for each deposit group and whether the deposit is expired or not, for deposits created after January 1, 1985.
SELECT deposit_group,
    is_deposit_expired,
    FLOOR(AVG(deposit_interest)) AS "Deposit Interest"
FROM wizard_deposits
WHERE deposit_start_date > '1985-01-01'
GROUP BY deposit_group,
    is_deposit_expired
ORDER BY deposit_group DESC,
    is_deposit_expired ASC;