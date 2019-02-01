// var stuff = [10,34,56,67,93,120,137,168,259,280,311,352,413,514];
// var randomValue = stuff[Math.floor(Math.random()*14)];

// Linear Search
// for (var i = 0; i < stuff.length; i++){
//   if (randomValue == stuff[i]){
//     console.log(stuff[i] + " is the " + i + " index.")
//   }
// }

// Binary Search
var stuff = [10,34,56,67,93,120,137,168,259,280,311,352,413,514];
var randomValue = stuff[Math.floor(Math.random()*stuff.length)];
var start = 0;
var end = stuff.length;

var binarySearch = function(stuff, randomValue, start, end) {
  var stuff = [10,34,56,67,93,120,137,168,259,280,311,352,413,514];
  var randomValue = stuff[Math.floor(Math.random()*stuff.length)];
  var start = 0;
  var end = stuff.length -1;

  if (start > end) {
    return false;
  } else {
    var mid = Math.floor((start + end)/2);
    if (stuff[mid] === randomValue) {
      console.log(stuff[mid] + " is the " + mid + " index.");
    } else if (stuff[mid] > randomValue) {
      end = mid-1
      return binarySearch();
    } else {
      start = mid+1
      return binarySearch()
    }
  }
}

binarySearch();