const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

<<<<<<< HEAD
// moviePatrons.forEach(patron => console.log(patron.age));
=======
moviePatrons.forEach(patron => console.log(patron.age));
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age <= 17;
});

<<<<<<< HEAD
// console.log(canWatchRatedR);
=======
console.log(canWatchRatedR);
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  if (patron.age >= 17) {
    patron.canWatchRatedR = true;
  } else {
    patron.canWatchRatedR = false;
  }
  return patron;
});

<<<<<<< HEAD
// console.log("Carded Movie Patrons: ");
// console.log(cardedMoviePatrons);

// console.log(moviePatrons);

const whatAmI = moviePatrons.reduce((sum, person) => {
  return sum + person.age;
}, 0);

console.log(whatAmI);
=======
console.log("Carded Movie Patrons: ");
console.log(cardedMoviePatrons);
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
