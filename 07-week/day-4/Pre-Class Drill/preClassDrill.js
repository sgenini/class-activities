// Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array parameter and , if it returns true, add the element to a new array. Return the new array. 

// Ex:

// Input: [1,2,3]  function(num){return num === 2}
// Output: [2]

// Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
// Output: [2,4,6]

// Input: [1,2,3,4,5,6]  function(num){return num > 3}
// Output: [4,5,6]


function funk(arr, evenCheck){
    var arr = [1,2,3,4,5,6,7,8,9];
    var evenArr = [];
    function evenCheck(num){
        if (num % 2 === 0){
            evenArr.push(num);
        }
    }
    for (var i = 0; i < arr.length; i++){
        evenCheck(arr[i]);
    }
    console.log(evenArr);
}

funk();