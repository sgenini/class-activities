var connection = require("./connection.js");

var orm = {
    selectColFrom: function(colToSearch, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colToSearch, tableInput], function (err, result) {
            if (err) throw (err);
            console.log(result);
            console.log("=================");
        });
    },

    selectAllFromWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          console.log(result);
          console.log("=================");
        });
    },

    leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
        var queryString = "SELECT ?? FROM ?? AS tOne LEFT JOIN ?? AS tTwo ON tOne.?? = tTwo.??";
        console.log(queryString);

        connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, results){
            if (err) throw err;
            console.log(result);
            console.log("=================");
        });
    }

}

module.exports = orm;