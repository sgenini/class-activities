var Student = require("./student");
var Class = function(professor, roomNumber) {
    this.students = [];
    this.studentCount = 0;
    this.professor = professor;
    this.roomNumber = roomNumber;
    this.addStudent = function(name, subject, grade) {
        this.students.push(new Student(name, subject, grade));
    };
    this.studentCount = function(){
        return this.students.length;
    }
};

module.exports = Class;