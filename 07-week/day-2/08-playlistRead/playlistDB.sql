DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Juicy", "The Notorious B.I.G.", "Hip-Hop");

INSERT INTO songs (title, artist, genre)
VALUES ("Royals", "Lorde", "Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("Super Rad", "The Aquabats", "Ska");

INSERT INTO songs (title, artist, genre)
VALUES ("Nights", "Frank Ocean", "Pop"), ("September", "Earth, Wind & Fire", "R&B");

SELECT * FROM songs