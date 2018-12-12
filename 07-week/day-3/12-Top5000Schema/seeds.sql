DROP DATABASE IF EXISTS top5000_db;

CREATE DATABASE top5000_db;

USE top5000_db;

CREATE TABLE top5000 (
    pos INT NOT NULL,
    artist VARCHAR(45) NULL,
    song VARCHAR(45) NULL,
    year INT NULL,
    world DECIMAL(10,3) NULL,
    us DECIMAL(10,3) NULL,
    uk DECIMAL(10,3) NULL,
    eur DECIMAL(10,3) NULL,
    rest DECIMAL(10,3) NULL
);

INSERT INTO top5000 (pos, artist, song, year, world, us, uk, eur, rest)
VALUES (1,"Bing Crosby","White Christmas",1942,39.903,23.929,5.7,2.185,0.54), (2,"Bill Haley & his Comets","Rock Around the Clock",1955,36.503,19.961,7.458,5.663,0.76), (3,"Celine Dion","My Heart Will Go On",1998,35.405,12.636,8.944,23.701,3.61);

SELECT * FROM top5000;