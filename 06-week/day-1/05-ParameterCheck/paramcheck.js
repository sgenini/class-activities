console.log(process.argv[2]);
console.log(process.argv[3]);

if (process.argv[2] === process.argv[3]) {
    console.log(process.argv[2] + " = " + process.argv[3])
    console.log("Arguments match.")
}

else {
    console.log("Arguments do not match.")
} 