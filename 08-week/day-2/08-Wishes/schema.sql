-- Create the database wish_saver_db and specified it for use.
CREATE DATABASE wish_list_db;
USE wish_list_db;

-- Create the table wishs.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('World Peace');
INSERT INTO wishes (wish) VALUES ('End World Hunger');
INSERT INTO wishes (wish) VALUES ('Catch a Shiny Charizard');