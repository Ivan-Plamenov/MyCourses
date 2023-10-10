-- Creating the 'categories' table to store board game categories.
CREATE TABLE IF NOT EXISTS categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
-- Creating the 'addresses' table to store location details of publishers.
CREATE TABLE IF NOT EXISTS addresses(
    id SERIAL PRIMARY KEY,
    street_name VARCHAR(100) NOT NULL,
    street_number INT NOT NULL,
    CONSTRAINT addresses_street_number_check CHECK(street_number > 0),
    town VARCHAR(30) NOT NULL,
    country VARCHAR(50) NOT NULL,
    zip_code INT NOT NULL,
    CONSTRAINT addresses_zip_code_check CHECK(zip_code > 0)
);
-- Creating the 'publishers' table to store board game publishers' details.
CREATE TABLE IF NOT EXISTS publishers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    address_id INT NOT NULL,
    CONSTRAINT fk_publishers_addresses FOREIGN KEY (address_id) REFERENCES addresses(id) ON DELETE CASCADE,
    website VARCHAR(40),
    phone VARCHAR(20)
);
-- Creating the 'players_ranges' table for holding minimum and maximum player counts for each game.
CREATE TABLE IF NOT EXISTS players_ranges(
    id SERIAL PRIMARY KEY,
    min_players INT NOT NULL,
    CONSTRAINT players_ranges_min_players_check CHECK(min_players > 0),
    max_players INT NOT NULL,
    CONSTRAINT players_ranges_max_players_check CHECK(max_players > 0)
);
-- Creating the 'creators' table for storing data about board game creators.
CREATE TABLE IF NOT EXISTS creators(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL
);
-- Creating the 'board_games' table to store details of individual board games.
CREATE TABLE IF NOT EXISTS board_games(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    release_year INT NOT NULL,
    CONSTRAINT board_games_release_year_check CHECK(release_year > 0),
    rating NUMERIC NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT fk_board_games_categories FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    publisher_id INT NOT NULL,
    CONSTRAINT fk_board_games_publishers FOREIGN KEY (publisher_id) REFERENCES publishers(id) ON DELETE CASCADE,
    players_range_id INT NOT NULL,
    CONSTRAINT fk_board_games_players_ranges FOREIGN KEY (players_range_id) REFERENCES players_ranges(id) ON DELETE CASCADE
);
-- Creating the 'creators_board_games' mapping table to establish a relationship between creators and board games.
CREATE TABLE IF NOT EXISTS creators_board_games(
    creator_id INT NOT NULL,
    CONSTRAINT fk_creators_board_games_creators FOREIGN KEY (creator_id) REFERENCES creators(id) ON DELETE CASCADE,
    board_game_id INT NOT NULL,
    CONSTRAINT fk_creators_board_games_board_games FOREIGN KEY (board_game_id) REFERENCES board_games(id) ON DELETE CASCADE
);