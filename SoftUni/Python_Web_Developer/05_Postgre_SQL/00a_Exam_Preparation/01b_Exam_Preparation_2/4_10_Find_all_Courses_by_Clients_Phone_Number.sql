-- Defines a function that returns the number of courses booked by a client based on their phone number.
CREATE OR REPLACE FUNCTION fn_courses_by_client(phone_num VARCHAR(20)) RETURNS INT AS $$
DECLARE course_count INT;
BEGIN
SELECT COUNT(*) INTO course_count
FROM courses AS cou
    JOIN clients AS cl ON cou.client_id = cl."id"
WHERE cl.phone_number = phone_num;
RETURN course_count;
END;
$$ LANGUAGE plpgsql;
-- Calls the function with three different phone numbers and fetches the number of courses for each client.
SELECT fn_courses_by_client('(803) 6386812') as "number_of_courses";
SELECT fn_courses_by_client('(831) 1391236') as "number_of_courses";
SELECT fn_courses_by_client('(704) 2502909') as "number_of_courses";