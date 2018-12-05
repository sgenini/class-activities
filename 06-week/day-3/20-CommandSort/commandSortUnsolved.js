// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var array = [15,54,82,85,28,96,21,61,90,20,47,53,82,23];

// The compare function determines the value of a - b as positive, negative, or zero;
// If negative, it knows that a is less than b.
// If zero, it knows that a = b.
// If positive, it knows that b is greater than a.
// Thus, it sorts it accordingly.
console.log(array.sort(function(a,b) {
    return a - b;
}));