var fs = require("fs");

var transaction = process.argv[2];

function total(){
    fs.readFile("bank.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        // console.log(data);
        var dataArr = data.split(", ");
        // console.log(dataArr);
        var balance = 0;
        for (var i = 0; i < dataArr.length; i++){
            var current = parseFloat(dataArr[i]);
            balance += current;
        }
        console.log("Your balance is $" + balance.toFixed(2));
      });
}

if (transaction === "total") {
    total();
}

else if (transaction === "deposit") {
    var amount = process.argv[3]
    fs.appendFile("bank.txt", ", " + amount, function(err) {
        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
          console.log("Deposited $" + amount + "!");
        }
      });
      total();
}


else if (transaction === "withdraw") {
    var amount = process.argv[3]
    fs.appendFile("bank.txt", ", -" + amount, function(err) {
        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
          console.log("Withdrew $" + amount + "!");
        }
      });
      total();
}



else if (transaction === "lotto") {
    fs.appendFile("bank.txt", ", -.25", function(err) {
        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else if ((Math.floor(Math.random()*10) == 7)) {
          fs.appendFile("bank.txt", ", 10", function(err) {
            if (err) {
                console.log(err);
                }
            else {
                console.log("Congratulations! You won $10!");
                }
            }
          )}

        else {
          console.log("Sorry, better luck next time!");
        }
      });
      total();
}

