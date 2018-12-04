var bandList = require("./bands.js");

if (process.argv[2]) {
    var genre = process.argv[2];
}

for (var key in bandList) {
    if (key === genre || genre === undefined){
        console.log("A " + key + " band is " + bandList[key] + ".");
    }
};