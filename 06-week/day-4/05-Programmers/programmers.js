function Programmer(name, position, age, language){
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
}

Programmer.prototype.printInfo = function(){
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nFavorite Language: " + this.language + "\n");
}

var stephane = new Programmer("Stephane Genini", "Full Stack Developer", "25", "JavaScript");

stephane.printInfo();
Programmer.prototype.printInfo();