// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;
    fs.readFile(__dirname + path, function(err, data){
        switch (path) {
            case "/thanks":
                return renderThankYouPage(req, res);
            default:
                return renderWelcomePage(req,res);
        }
    });
}

function renderWelcomePage(req,res){
    // Saving the request data as a variable
    var requestData = "";
  
    // When the server receives data...
    req.on("data", function(data) {
      // console.log(data)
      // Add it to requestData.
      requestData += data;
      console.log("You just posted some data to the server:\n" + requestData);
      fs.readFile(__dirname + "/index.html", function(err, data) {
          res.writeHead(200, { "Content-Type": "text/html"});
          res.end(data);
      });
    });
  
    // When the request has ended...
    req.on("end", function() {
  
      // Log (server-side) the request method, as well as the data received!
      console.log("You did a", req.method, "with the data:\n", requestData);
      res.end();
    });
  
  }

function renderThankYouPage(req,res){
  // Saving the request data as a variable
  var requestData = "";

  // When the server receives data...
  req.on("data", function(data) {
    // console.log(data)
    // Add it to requestData.
    requestData += data;
    console.log("You just posted some data to the server:\n" + requestData);
    fs.readFile(__dirname + "/thanks.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(data);
    });
  });

  // When the request has ended...
  req.on("end", function() {

    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", requestData);
    res.end();
  });

}

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
