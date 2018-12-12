DROP DATABASE IF EXISTS great_bayDB;

CREATE DATABASE great_bayDB;

USE great_bayDB;

CREATE TABLE auctions (
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(45) NULL,
    category VARCHAR(45) NULL,
    starting_bid DECIMAL(10,2) NULL,
    highest_bid DECIMAL (10,2) NULL,
    PRIMARY KEY (id)
);

SELECT * FROM auctions;