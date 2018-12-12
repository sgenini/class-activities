DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
    pos INT NOT NULL,
    artist VARCHAR(100) NULL,
    song VARCHAR(100) NULL,
    year INT NULL,
    raw_total DECIMAL(10,3) NULL,
    raw_usa DECIMAL(10,3) NULL,
    raw_uk DECIMAL(10,3) NULL,
    raw_eur DECIMAL(10,3) NULL,
    raw_row DECIMAL(10,3) NULL,
    PRIMARY KEY (pos)
);

