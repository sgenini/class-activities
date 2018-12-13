var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("All we have to decide is what to do with the time that is given to us.")
}

function handleRequest2(request, response) {
    response.end("Great men are not born great, they grow great.")
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})

server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
})