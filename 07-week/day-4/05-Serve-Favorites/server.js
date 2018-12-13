var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server is listening on http://localhost:" + PORT);
})

function handleRequest(req, res) {
    var path = req.url;

    fs.readFile(__dirname + path, function(err, data){
        switch (path) {
            case "/food":
                return fs.readFile(__dirname + "/food.html", function(err, data) {
                    res.writeHead(200, { "Content-Type": "text/html"});
                    res.end(data);
                });
            case "/movies":
                return fs.readFile(__dirname + "/movies.html", function(err, data) {
                    res.writeHead(200, { "Content-Type": "text/html"});
                    res.end(data);
                });
            case "/frameworks":
                return fs.readFile(__dirname + "/frameworks.html", function(err, data) {
                    res.writeHead(200, { "Content-Type": "text/html"});
                    res.end(data);
                });

            default:
                return fs.readFile(__dirname + "/index.html", function(err, data) {
                    res.writeHead(200, { "Content-Type": "text/html"});
                    res.end(data);
                });
        }
    });
}