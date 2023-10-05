CREATE OR REPLACE FUNCTION fn_calculate_future_value(
        initial_sum DECIMAL(19, 4),
        yearly_interest_rate DECIMAL(19, 4),
        number_of_years INT
    ) RETURNS DECIMAL(19, 4) AS $$
DECLARE future_value DECIMAL(19, 4);
BEGIN -- Calculate future value using the formula
future_value := initial_sum * POWER(1 + yearly_interest_rate, number_of_years);
-- Round to four decimal places
future_value := ROUND(future_value, 4);
RETURN future_value;
END;
$$ LANGUAGE plpgsql;