// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true});
  } else {
    next();
  }
}

app.use(ignoreFavicon);


// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/:character", function(req, res) {
  console.log(req.params)

  var chosen = req.params.character;

  characters.forEach(person => {
    if(person.routeName === chosen){
      res.json(person)
    }
  });

  // // What does this log?
  // console.log(chosen);

  // res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
