var Student = function(name, subject, grade) {
    this.name = name;
    this.subject = subject;
    this.grade = grade;
    this.announceJoin = function(){
        console.log(this.name + " has just enrolled in the class!");
    }
};

module.exports = Student;