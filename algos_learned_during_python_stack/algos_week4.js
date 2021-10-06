// MON


function iteratePrint(num){
  for(var i= num ; i >=0 ; i--){
    console.log(i)
  }
}
iteratePrint(5)

// FUNCTION DEFINED
function recursivePrint(num){
  // 1. BASE CASE
  if(num == 1){
    console.log(num)
    return "hELLO"
  }
  console.log(num)
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  num--
  // 3. RECURSIVE CALL
  recursivePrint(num)
}
// FUNCTION CALLED
recursivePrint(3)

// 1, BASE CASE - stops the algorithm from infinite loop
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
// 3. RECURSIVE CALL

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(num) {
  // 1. BASE CASE
  if(num == 1){
      return 1
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  return num + recursiveSigma(num - 1)
}
// 5 => 5 + 4 + 3 + 2 + 1 => 15
console.log(recursiveSigma(3)) // 6

/* 
  Recursively sum an arr of ints
*/






function sumArr(arr, i=0) {
  // 1. BASE CASE  
  if(i == arr.length-1){
      return arr[i]
  }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    // 3. RECURSIVE CALL
  return arr[i] + sumArr(arr, i+1)
}
console.log(sumArr([1,2,3])) // 6
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
























// WED
/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false

    for(var i=0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        arr[i] is an array
      }
    }

    var arr1 = [1,2,3]
    var arr2 = [4,5,6]
    var arr3 = arr1.concat(arr2)
    console.log(arr3) => [1,2,3,4,5,6]
*/
//1, Iteratre through array and check to see if element is an array
function recFlatten(arr){
  arr2 = []
  for(var i=0; i < arr.length; i++){
    if(Array.isArray(arr[i]) == true){
      arr2 = arr2.concat(recFlatten(arr[i]))
    }
    else {
      arr2.push(arr[i])
    }
  }
  // 1, BASE CASE - stops the algorithm from infinite loop
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  return arr2 
}

console.log(recFlatten([1,[2,3,[4]],5]))
// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]


function recFlatten(arr, arr2 = []){
  // 1, BASE CASE - stops the algorithm from infinite loop
  if(Array.isArray(arr) == false){
    return arr
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  var newArr = []
  for(var i=0; i < arr.length; i++){
  // 3. RECURSIVE CALL
  newArr = newArr.concat(recFlatten(arr[i]))
  }
  return newArr
}

console.log(recFlatten([1,[2,3,[4]],5]))





// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//











// THURS


/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

function recursiveBinary(arr, target){
// 1, BASE CASE - stops the algorithm from infinite loop
  if(arr.length == 1){
    if(arr[0] == target){
      return true
    }
    else {
      return false
    }
  }
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  var midInd = Math.floor((arr.length-1)/2)
// 3. RECURSIVE CALL
  if(target == arr[midInd]){
    return true
  }
  else if(target < arr[midInd]){
    // Take the left half of the array and do recursive call
    return recursiveBinary(arr.slice(0, midInd), target)
  }
  else {
    // Take the right half of the array and do recursive call
    return recursiveBinary(arr.slice(midInd + 1, arr.length), target)
  }
}
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 7))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 20))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 1))







function binarySearch(arr,target){
  //1. SET LEFT AND RIGHT POINTERS TO BEGINNING AND END OF ARRAY//
  var leftInd = 0
  var rightInd = arr.length - 1
  //2. REPEAT PROCESS UNTIL//
  while (leftInd <= rightInd){
    //3. FIND THE MIDDLE INDEX OF THE CURRENT RANGE OF INDICES//
    //Use Math.floor if the outcome is an odd number to round down//
    var midInd = Math.floor((rightInd + leftInd) / 2)
    //4. COMPARE THE TARGET WITH THE MIDDLE VALUE
    if(target == arr[midInd]){
      return true
    }
    else if(target < arr[midInd]){
      rightInd = midInd - 1
    }
    else{
      leftInd = midInd + 1
    }
  }
  return false
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7))
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 20))
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 1))













// // -----------------------------------------------------------------------------------------------//
// // -----------------------------------------------------------------------------------------------//

// // THUR

// /* 
//     Rising Square
//     Given a number return an array filled with the
//     squares of integers up to given number
// */
// function risingSqaures(num, arr){

// }
// // EX. 3 => [1,4,9]
// // EX. 5 => [1,4,9,16,25]

// /* 
//   recursively find the lowest common multiple between two numbers
//   "A common multiple is a number that is a multiple of two or more integers. 
//   The common multiples of 3 and 4 are 0, 12, 24, .... 
//   The least common multiple (LCM) of two numbers is the smallest number (not zero) 
//   that is a multiple of both."
  
//   Try writing two columns of multiples as a starting point:
//   starting with 15 and 25 and keep writing their multiples until you find the lowest common one
//   then turn this in to a step by step instruction
//   15 25
//   30 50
//   45 75
//   60
//   75
//   75 is the first common
// */

// function LCM(a,b, aMult=a, bMult=b){

// }


// // -----------------------------------------------------------------------------------------------//
// // -----------------------------------------------------------------------------------------------//


// FRI

/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/

//Version 1:
function risingSquares(num, arr=[]){
  if(arr[arr.length-1] == num*num) {
    return arr
  }
  arr.push((arr.length+1)*(arr.length+1))
  return risingSquares(num, arr);
}
console.log(risingSquares(3))
console.log(risingSquares(5))


//Version 2:
function risingSquares(num, arr=[]){
  if(arr[arr.length-1] == num*num) {
    return arr
  }
  arr.push(Math.pow(arr.length+1, 2))
  return risingSqaures(num, arr);
}
console.log(risingSquares(3))
console.log(risingSquares(5))


//Teacher Version:
function risingSquares(num){
  if(num == 1) {
    return [1]
  }
  var arr = risingSquares(num - 1)
  arr.push(num*num)
  return arr
}
console.log(risingSquares(3))
console.log(risingSquares(5))



// EX. risingSquares(3) => [1,4,9]
// EX. risingSquares(5) => [1,4,9,16,25]



/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
*/


function stringSubset(string, arr=[]){
  // 1, BASE CASE - stops the algorithm from infinite loop
  if(string){
      return arr
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  return string + stringSubset(string, arr)
}
console.log(stringSubset("ABC"))

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]





