var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "top_songsDB"
});

connection.connect(function(err) {
    if(err) throw err;
    start();
});

function start(){
    console.log("\n\r");
    inquirer
        .prompt({
            name: "selectQuery",
            type: "list",
            message: "What would you like to search for?",
            choices: ["Search by artist", "Find artists who appear more than once", "Find all songs within a specific year range", "Search for a specific song"]
        })
        .then(function(answer){
            if (answer.selectQuery === "Search by artist"){
                searchArtist();
            }
            else if (answer.selectQuery === "Find artists who appear more than once"){
                repeatArtists();
            }
            else if (answer.selectQuery === "Find all songs within a specific year range") {
                searchRange();
            }
            else if (answer.selectQuery === "Search for a specific song"){
                searchSong();
            }
        });
}

function searchArtist(){
    console.log("\nPreparing to search by artist...\n");
    inquirer
        .prompt({
            name: "artistName",
            type: "input",
            message: "Which artist would you like to search for?"
        })
        .then(function(answer){
            connection.query(
                "SELECT * FROM top5000 WHERE ?",
                [
                    {
                        artist: answer.artistName
                    },
                ],
                function (err, results){
                    if (err) throw err;
                    for (var i = 0; i < results.length; i++){
                        console.log(results[i].position + " - " + results[i].artist + " - " + results[i].song + " - " + results[i].year);
                    }
                    start();
                }
            );
        })
}

function repeatArtists(){
    console.log("\nFinding all artists who appear more than once...\n");
    connection.query(
        "SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1",
        function (err, results){
            if (err) throw err;
            for (var i = 0; i < results.length; i++){
                console.log(results[i].artist);
            }
            start();
        }
    );
}

function searchRange(){
    console.log("\nPreparing to search by time range...\n");
    inquirer
        .prompt([
            {
                name: "start",
                type: "input",
                message: "Enter starting year: ",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "end",
                type: "input",
                message: "Enter ending year: ",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function(answer){
            var query = "SELECT position,artist,song,year FROM top5000 GROUP BY year BETWEEN ? AND ?"
            connection.query(
                query, 
                [
                    {year: answer.start}, 
                    {year: answer.end}
                ],
                function (err, results){
                    if (err) throw err;
                    for (var i = 0; i < results.length; i++){
                        console.log(results[i].position + " - " + results[i].artist + " - " + results[i].song + " - " + results[i].year);
                    }
                    start();
                }
                );
        })
}

function searchSong(){
    console.log("\nPreparing to search by song name...\n");
    inquirer
        .prompt({
            name: "songName",
            type: "input",
            message: "Which song would you like to search for?"
        })
        .then(function(answer){
            connection.query(
                "SELECT * FROM top5000 WHERE ?",
                [
                    {
                        song: answer.songName
                    },
                ],
                function (err, results){
                    if (err) throw err;
                    for (var i = 0; i < results.length; i++){
                        console.log(results[i].position + " - " + results[i].artist + " - " + results[i].song + " - " + results[i].year);
                    }
                    start();
                }
            );
        })
}