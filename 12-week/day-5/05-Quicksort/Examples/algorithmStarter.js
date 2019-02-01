// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
// var arraySize = 40;

// // Case 2 - Large set of Numbers
var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function quickSort(items) {
  if (items.length <= 1) {
    return items
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = items.pop(); 

    for (var i = 0; i < items.length; i++) {
      if (items[i] <= pivot) {
        left.push(items[i])
      } else {
        right.push(items[i])
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(quickSort(array).join(" "));
