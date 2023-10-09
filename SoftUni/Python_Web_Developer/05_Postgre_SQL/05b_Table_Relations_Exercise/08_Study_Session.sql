--66/100
-- Create the "students" table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100) UNIQUE
);
-- Create the "exams" table
CREATE TABLE exams (
    id SERIAL PRIMARY KEY,
    exam_name VARCHAR(100) UNIQUE
);
-- Create the "study_halls" table
CREATE TABLE study_halls (
    id SERIAL PRIMARY KEY,
    study_hall_name VARCHAR(100),
    exam_id INT,
    FOREIGN KEY (exam_id) REFERENCES exams(id)
);
-- Create the "students_exams" table
CREATE TABLE students_exams (
    student_id INT,
    exam_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (exam_id) REFERENCES exams(id)
);
-- Set the starting value for the "exams" table's identifier to 101
-- This command might vary depending on your PostgreSQL version
-- If you encounter issues, you can omit this line
SELECT setval(
        pg_get_serial_sequence('exams', 'id'),
        101,
        false
    );
-- Insert data into the "students" table
INSERT INTO students (student_name)
VALUES ('Mila'),
    ('Toni'),
    ('Ron');
-- Insert data into the "exams" table
INSERT INTO exams (exam_name)
VALUES ('Python Advanced'),
    ('Python OOP'),
    ('PostgreSQL');
-- Insert data into the "study_halls" table
INSERT INTO study_halls (study_hall_name, exam_id)
VALUES ('Open Source Hall', 102),
    ('Inspiration Hall', 101),
    ('Creative Hall', 103),
    ('Masterclass Hall', 103),
    ('Information Security Hall', 103);
-- Insert data into the "students_exams" table
INSERT INTO students_exams (student_id, exam_id)
VALUES (1, 101),
    (1, 102),
    (2, 101),
    (3, 103),
    (2, 102),
    (3, 103);