// 1. funnyCase makes each letter in a string the opposite case as the one before
<<<<<<< HEAD
var funnyCase = string => {
=======
var funnyCase = function(string) {
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase();
    else newString += string[i].toUpperCase();
  }
  return newString;
};

// Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!"));

// --------------------------------------------------------------------------

// 2. Map lets you loop over an array and modify the elements inside
<<<<<<< HEAD
var map = (arr, cb) => {
=======
var map = function(arr, cb) {
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  return result;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

<<<<<<< HEAD
var doubled = map(numbers, element => element * 2);
=======
var doubled = map(numbers, function(element) {
  return element * 2;
});
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646

// Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
console.log(doubled);

// --------------------------------------------------------------------------

// 3. filter lets you loop over an array and remove elements
<<<<<<< HEAD
var filter = (arr, cb) => {
=======
var filter = function(arr, cb) {
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

<<<<<<< HEAD
var evenNumbers = filter(numbers, currentElement => currentElement % 2 === 0);
=======
var evenNumbers = filter(numbers, function(currentElement) {
  return currentElement % 2 === 0;
});
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646

// Prints `[ 2, 4, 6, 8, 10 ]`
console.log(evenNumbers);

// --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your netflix queue
var netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club"
  ],
  watchMovie: function() {
    this.queue.pop();
  },
  addMovie: function(movie) {
    this.queue.unshift(movie);
  },
  printQueue: function() {
    var list = "";
    for (var i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i];
      list += (this.queue.length - i) + ". " + currentMovie + "\n";
    }
    console.log(list);
  }
};

console.log("Printing movie queue!\n");
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log("\nWatched a movie!\n");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
console.log("\nAdding a movie!\n");
netflixQueue.addMovie("Black Swan");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
