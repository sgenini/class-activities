// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var axios = require("axios");
var searchType = process.argv[2];
var searchQuery = process.argv.slice(3).join("%20");
var fs = require("fs");

function runProgram(searchType, searchQuery){
    if (searchType === "show") {
        axios.get("http://api.tvmaze.com/singlesearch/shows?q=" + searchQuery).then(
            function(response){
                console.log(response.data)
            }
        )
    }
}

runProgram(searchType, searchQuery);