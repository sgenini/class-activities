var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "great_bayDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    initialize();
});

function initialize(){
    inquirer
        .prompt([
            {
                type: "rawlist",
                message: "Welcome to GreatBay! What would you like to do?",
                choices: ["[POST] Post an item for Auction", "[BID] Bid on an existing item"],
                name: "initialize"
            }
        ])
        .then(function(inquirerResponse){
            if (inquirerResponse.initialize === "[POST] Post an item for Auction") {
                console.log("\nPreparing to post an item for Auction...\n");
                postItem();
            }
            else {
                console.log("\nRetrieving list of items for auction...\n")
                bidItem();
            }
        })
}

function validatePrice(price){
    var reg = /^\d*\.?\d*$/;
    return reg.test(price) || "Price should be a number!";
}

function postItem(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What would you like to list for auction?",
                name: "itemName"
            },
            {
                type: "input",
                message: "What category does this item belong to?",
                name: "itemCategory"
            },
            {
                type: "input",
                message: "What is the starting bid?",
                validate: validatePrice,
                name: "price"
            },
            {
                type: "confirm",
                message: "Are you sure:",
                name: "confirm",
                default: true
            }
        ])
        .then(function(inquirerResponse){
            if (inquirerResponse.confirm){
                var userPrice = parseFloat(inquirerResponse.price);
                var fixedPrice = userPrice.toFixed(2);
                var query = connection.query(
                    "INSERT INTO auctions SET ?",
                    {
                        item_name: inquirerResponse.itemName,
                        category: inquirerResponse.itemCategory,
                        starting_bid: inquirerResponse.price,
                        highest_bid: inquirerResponse.price
                    },
                    function(err, res) {
                        console.log("\nAdding item: " + inquirerResponse.itemName + " | " + inquirerResponse.itemCategory + " | " + fixedPrice + "\n") 
                    }
                )
                // initialize();
            }
            else {
                console.log("\nThat's okay, we'll try again later.\n");
                initialize();
            }
        })
}