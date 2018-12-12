var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "chicken1",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
    createSong();
});

function createSong(){
    console.log("Inserting a new song...\n");
    var query = connection.query(
        "INSERT INTO songs SET ?",
        {
            title: "Bohemian Rhapsody",
            artist: "Queen",
            genre: "Progressive Rock"
        },
        function(err,res){
            console.log(res.affectedRows + " song(s) inserted!\n");
            updateSong();
        }
    );
    console.log(query.sql);
}

function updateSong(){
    console.log("Updating genres...\n");
    var query = connection.query(
        "UPDATE songs SET ? WHERE ?",
        [ 
            {
                genre: "Rock Ballad"
            },
            {
                artist: "Queen"
            }
        ],
        function(err, res){
            console.log(res.affectedRows + " song(s) updated!\n")
            deleteSong();
        }
    );
    console.log(query.sql);
}

function deleteSong(){
    console.log("Deleting all Queen songs...\n");
    connection.query(
        "DELETE FROM songs WHERE ?",
        {
            artist: "Queen"
        },
        function(err, res) {
            console.log(res.affectedRows + " song(s) deleted!\n");
            readSongs();
        }
    );
}

function readSongs(){
    console.log("Displaying all songs...\n");
    connection.query("SELECT * FROM songs", function(err, res){
        if (err) throw err;
        for (var i = 0; i < res.length; i++){
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("=================================")
        connection.end();
    });
}