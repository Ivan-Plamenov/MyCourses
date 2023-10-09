-- Create a table to store product names, insert initial data, and add an auto-incrementing primary key.
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    -- Primary key for unique identifiers.
    product_name VARCHAR(100) -- Column for product names.
);
-- Insert initial product names into the table.
INSERT INTO products (product_name)
VALUES ('Broccoli'),
    ('Shampoo'),
    ('Toothpaste'),
    ('Candy');
-- Add an auto-incrementing primary key column.
ALTER TABLE products
ADD COLUMN id SERIAL PRIMARY KEY;