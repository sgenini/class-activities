DROP DATABASE IF EXISTS watch_list_db;
-- Create the database watch_list_db and specified it for use.
CREATE DATABASE watch_list_db;
USE watch_list_db;

-- Create the table movies.
CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Shawshank Redemption');

-- USE watch_list_db;
-- SELECT * FROM movies