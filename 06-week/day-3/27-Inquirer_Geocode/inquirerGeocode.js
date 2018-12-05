var NodeGeocoder = require("node-geocoder");

var options = {
  provider: "mapquest",
  apiKey: "REPJffUlLmDb1G5GhibDPP3tqUjYFf1f"
};

var geocoder = NodeGeocoder(options);

var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Where would you like to go?",
      name: "address"
    }
  ])
  .then(function(inquirerResponse){
    geocoder.geocode(inquirerResponse.address, function(err, data) {

      console.log(JSON.stringify(data[0], null, 2));
    });
  })
