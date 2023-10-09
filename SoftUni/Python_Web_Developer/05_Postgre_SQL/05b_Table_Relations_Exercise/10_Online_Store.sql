-- Create the "item_types" table with an automatically incremented primary key
CREATE TABLE item_types (
    id SERIAL PRIMARY KEY,
    item_type_name VARCHAR(50)
);
-- Create the "items" table with an automatically incremented primary key
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(50),
    item_type_id INT,
    CONSTRAINT fk_items_item_types FOREIGN KEY (item_type_id) REFERENCES item_types (id) ON DELETE CASCADE
);
-- Create the "cities" table with an automatically incremented primary key
CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    city_name VARCHAR(30)
);
-- Create the "customers" table with an automatically incremented primary key
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(50),
    birthday DATE,
    city_id INT,
    CONSTRAINT fk_customers_cities FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
);
-- Create the "orders" table with an automatically incremented primary key
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT,
    CONSTRAINT fk_orders_customers FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);
-- Create the "order_items" table with foreign keys to orders and items, enabling cascading deletes
CREATE TABLE order_items (
    order_id INT,
    CONSTRAINT fk_order_items_orders FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    item_id INT,
    CONSTRAINT fk_order_items_items FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE
);