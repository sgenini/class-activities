// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var Todo = db.Todo;

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    Todo.findAll({}).then(function(result){
      return res.json(result);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    var todo = req.body;
    Todo.create({
      text: todo.text,
      complete: todo.complete
    }).then(function(results){
      res.json(results);
    })
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    console.log("Todo ID:");
    console.log(req.params.id);
    Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.end();
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos/", function(req, res) {
    var editTodo = req.body;
    Todo.update(editTodo, {
      where: {
        id: editTodo.id
      }
    }).then(function(){
      res.end();
    });
  });
};
