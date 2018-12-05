// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Halt! Who goes there?",
            name: "username"
        },
        {
            type: "list",
            message: "What are your intentions?",
            choices: ["I need your strongest potions", "You killed my father. Prepare to die", "I'm searching for the Holy Grail"],
            name: "intention"
        },
        {
            type: "checkbox",
            message: "What do you have to offer for my services?",
            choices: ["1,300 gold pieces", "A big ol' kiss", "My unwavering loyalty"],
            name: "offer"
        },
        {
            type: "password",
            message: "That sounds reasonable, but I can only offer my help to those who know the Ancient Words.",
            name: "password",
            mask: "*"
        },
        {
            type: "confirm",
            message: "Are you sure that is the correct word?",
            name: "confirm",
            default: true
        }
    ])
    .then(function(inquirerResponse){
        if(inquirerResponse.confirm){
            console.log("\nWelcome back to the Brotherhood, " + inquirerResponse.username);
            if(inquirerResponse.password !== "chicken"){
                console.log("I'm sorry, but it seems the passphrase has changed since you last were here. Return once you have the new words.\n\r\n\r");
            }
            else {
                console.log("I will accept your offer of: '" + inquirerResponse.offer.join("' and '") + "' and provide you with my services to help you complete: '" + inquirerResponse.intention + "'\n\r\n\r")
            }
        }
        else {
            console.log("\nReturn to me once you have the balls to commit to your answer.\n\r\n\r")
        }
    })