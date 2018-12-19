var Class = require("./class");
var bootCamp = new Class("David Hallinan", 213);

bootCamp.addStudent("Stephane Genini","JavaScript",4.0);
console.log(JSON.stringify(bootCamp.students, null, 2) + "\n");