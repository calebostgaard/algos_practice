// Algorithm Practice - Arrays
// It's now time to practice writing your own algorithms using arrays!  
// Create an algorithm for each of the challenges below.  Make sure that 
// you run your code to ensure your output is matching the provided expected 
// output.

// Using the given array for testing:

var testArr = [6,3,5,1,2,4]

// WARM-UP: Print all the values in the array using a for loop

// for(var i = 0; i < testArr.length; i++) {
//     console.log(testArr[i]);
// }


// for(var i = 0; i < testArr.length; i++) {
//     // Version 1: string concatentation
//     console.log(" Num " + testArr[i] " is at position " + i);
//     // Version 2: string interpolation -> insterting variables directly into a string
//     console.log(`Num ${ testArr[i]} is at position ${ i }`)
// }

// CHALLENGE 1: Print Values and Sum

var testArr = [6,3,5,1,2,4]
var sum = 0
    
for(var i = 0; i < testArr.length; i++) {
    sum += testArr[i]
    console.log(`Num ${ testArr[i]}, Sum ${sum}`);
}

// Print each array value and the sum so far
// The expected output will be: 
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21




// CHALLENGE 2: Value * Position

// Multiply each value in the array by its array position (index)
// The expected output will be:
// [0,3,10,3,8,20]

var testArr = [6,3,5,1,2,4];

for(var x = 0; x < testArr.length; x++) {
    testArr[x] = testArr[x] * x;
}

console.log(testArr); 


// Different version, keeps old array //

var testArr = [6,3,5,1,2,4];
var newArr = []
var num = 0;

for(var x = 0; x < testArr.length; x++) {
    newArr.push (testArr[x] * x)
}

console.log(newArr);
