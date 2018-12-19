var orm = require("./config/orm.js");

orm.selectWhere("parties", "party_type", "grown-up", function(response){
    console.log(response);
});

// console.log(data); // Data is undefined. Why?