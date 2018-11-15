
function primeChecker(num){
    for (var i = 2; i < num; i++){
        if (num%i === 0){
            return false;
        }
        else {
            // return num > 1;
            return true;
        }
    }
}

console.log(primeChecker(23));
console.log(primeChecker(7));
console.log(primeChecker(0));
console.log(primeChecker(1));