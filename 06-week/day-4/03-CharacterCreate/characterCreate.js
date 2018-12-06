function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.printStats = function() {
        console.log(this)
    };
    this.isAlive = function() {
        if (this.hitpoints > 0){
            console.log(this.name + " is alive and has " + this.hitpoints + " HP.");
            return true;
        }
        else {
            console.log(this.name + " has perished.");
            return false;
        }
    };
    this.attack = function(target){
        target.hitpoints -= this.strength;
        console.log(this.name + " attacks " + target.name + " for " + this.strength + " damage! " + target.name + " has " + target.hitpoints + " HP remaining.");
    };
    this.levelUp = function(){
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
        console.log(this.name + " has leveled up! " + this.name + " is now " + this.age + " years old, and now has " + this.strength + " strength, and " + this.hitpoints + " HP.");
    }
}

var david = new Character("David", "Instructor", "Male", 36, 15, 100)
var link = new Character("Link", "Champion of Hyrule", "Male", 117, 20, 120)

while(david.isAlive() && link.isAlive()){
    david.attack(link);
    link.attack(david);
    david.printStats();
    link.printStats();
}