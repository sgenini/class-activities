var inquirer = require("inquirer");

function Player(name, position, offense, defence){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defence = defence;
}

Player.prototype.goodGame = function(){
    console.log("This'll do something.");
    console.log("---------------");
}
Player.prototype.badGame = function(){
    console.log("This'll do something.");
    console.log("---------------");
}
Player.prototype.printStats = function(){
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nAge: " + this.age + "\nLanguages: " + this.language);
    console.log("---------------");
}

var count = 0;
var starterArray = [];
var subArray = [];

var newPlayer = function(){
    if (count < 3){
        console.log("New Player:");
        inquirer.prompt([
            {
                name: "name",
                message: "What is the Players name?"
            },{
                name: "position",
                message: "What position do they play?"
            },{
                name: "offense",
                message: "What is their Offense rating?"
            },{
                name: "defense",
                message: "What is their Defense rating?"
            }
        ]).then(function(answers){
            if (count < 2){
                var newStarter = new Player(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.defense
                );
                starterArray.push(newStarter);
                count++;
                newPlayer();
            }
            else if (count === 2){
                var newSub = new Player(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.defense
                );
                subArray.push(newSub);
                count++;
                newPlayer();
            }
            else {
                for (var x = 0; x < starterArray.length; x++) {
                  starterArray[x].printStats();
                }
                for (var j = 0; j < subArray.length; j++) {
                    subArray[j].printStats();
                  }
              }
        })
    }
}

newPlayer();