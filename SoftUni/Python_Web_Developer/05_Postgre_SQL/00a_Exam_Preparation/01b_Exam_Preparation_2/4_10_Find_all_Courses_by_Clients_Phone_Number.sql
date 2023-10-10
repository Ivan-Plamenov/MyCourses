-- Create a user-defined function to count courses for a client based on phone number
CREATE OR REPLACE FUNCTION fn_courses_by_client(phone_num VARCHAR(20)) RETURNS INTEGER AS $$ BEGIN RETURN (
        SELECT COUNT(*)
        FROM courses c
            JOIN clients cl ON c.client_id = cl.id
        WHERE cl.phone_number = phone_num
    );
END;
$$ LANGUAGE plpgsql;