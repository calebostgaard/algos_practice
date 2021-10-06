

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// MON
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]
const arr1 = [1,2,2,2,8,9];
const arr2 = [2,2,8,9];

function intersection(arr1, arr2) {
    let idx1 = 0; // define indexes for both arrays
    let idx2 = 0;

    const len1 = arr1.length; // fix the lengths
    const len2 = arr2.length;

    const result = []; // set a result

    // while loop is a for loop + an if statement
    // as long as we don't read off an array
    while (idx1 < len1 && idx2 < len2) {
        // walk the smaller idx forward
        if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else if (arr1[idx1] > arr2[idx2]) {
            idx2++;
            // else they are equal
        } else {
            // double check we've not already added this number
            if (result[result.length - 1] !== arr1[idx1]) {
                result.push(arr1[idx1]);
            }
            // walk forward both indexes
            idx1++;
            idx2++;
        }
    }

    return result;
}

console.log(intersection(arr1, arr2));





function intersection2(arr1, arr2) {
    let objCheck = {};
    let newArr = [];
    for (var i=0; i<arr1.length; i++){
        if (!(arr1[i] in Object.keys(objCheck))){
        objCheck[arr1[i]] =  false;
        }
    }
    for (var j=0; j<arr2.length; j++){
        if (arr2[j] in Object.keys(objCheck)){
        objCheck[arr2[j]] =  true;
        }else{
        objCheck[arr2[j]] =  false;
        }
    }

    return objCheck;
}

console.log(intersection2(arr1, arr2));

// remember that the inputs and outputs are already sorted!!

// 1-255
// are the lengths of the inputs the same? no
// please do not use any built in or helper functions
// ideal solution is solve for 0(n) if you can
// can they be negative? no
// can the arrays be empty? yes

// sets contain only unique values
// multisets can contain duplicates

// you may use addtional arrays or objects as temporary storage (space constaints)

function intersection3(arr1, arr2) {
    var newObj1 = {};
    var newObj2 = {};
    var newArr = [] ;

    for(val in arr1) {
        newObj1[arr1[val]] = arr1[val];
    }
    
    console.log(newObj1);

    for(val in arr2) {
        newObj2[arr2[val]] = arr2[val];
    }

    console.log(newObj2);

    for(var i of Object.keys(newObj1, newArr)) {
        if(newObj1[i] == newObj2[i]) {
        newArr.push(i);
        }
    }

    return newArr;
}
console.log(intersection3([1,2,2,2,7], [2,2,6,6,7]));
//Thx



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// TUES
// ------------------------------------------------------------------------------------------------------------------------------------------------------


// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsqSums(arr, k) {
    let newArr = [];
    let tempArr = [];
    for (var i=0; i<arr.length; i++){
        for (var j=arr.length; j>i; j--){
            let sum = 0;
            tempArr = arr.slice(i,j);
            for (var d=0; d<tempArr.length; d++){
                sum += tempArr[d];
            } if(sum < k){
                break;
            } else if (sum == k){
                newArr.push(tempArr);
            }
        }
    } return newArr;
}

x = 16;
myArr = [2, 5, 3, 6, 7, 0, 0, 23, 11];
console.log(findConsqSums(myArr, x))



function findConsqSumsTV(arr, k) {
    // create an output
    const sums = [];

    // loop the array
    for (let i = 0; i < arr.length; i++) {
        // create a consecutive sum array
        const consecNums = [];
        // and a rolling sum
        let sum = 0;
        // starting at i
        let j = i;
        // loop until the sum is less than k or we read off the end of arr
        while (sum <= k && j < arr.length - 1) {
            // if sum + j is still smaller, add it
            if (sum + arr[j] <= k) {
                sum += arr[j];
                consecNums.push(arr[j])
                j++;

                // if sum is equal to k now, push
                if (sum === k) {
                    sums.push([...consecNums]);
                }
            } else {
                // if the next number is so large that the sum becomes larger than k, break
                break;
            }
        }
    }

    // give back the sums
    return sums;
}

console.log(findConsqSumsTV([2,5,3,6,7,0,0,23,11], 16));


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// WED
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// quickly: O(n)
// no space constraints

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

function findMissingValue(arr) {
    arr.sort();
    for (var i=0; i<arr.length; i++){
        if (arr[i] != i){
            console.log("in here")
            return i;
        }
    } return arr.length;
}

console.log(findMissingValue([3, 2, 1, 0]));

function findMissingValueV2(arr) {
    var max = arr[0];
    var sum = 0;
    for (let i = 0; i<arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        sum += arr[i];
    }
    if ((arr.length-1) == max) {
        return arr.length;
    }
    else {
        let actualTotal = sum+arr.length;
        return actualTotal - sum;
    }
}

console.log(findMissingValueV2([3, 2, 1, 0, 5]));

function findMissingValueTV(arr) {
    let arrSum = 0; // sum of the array
    let realSum = arr.length; // sum 0-length

    for (var i = 0; i < arr.length; i++) {
        arrSum += arr[i]; //sum the values we have
        realSum += i; //sum the values we expect
    }

    return realSum - arrSum; // subtract what we have from what we should have
}
console.log(findMissingValueTV([3, 2, 1, 0, 5]));

// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// given [13, 17, 18, 3, 5, 6, 8, 9, 10]
// return 3

// [1,2,3]
// [2,3,1]
// [3,1,2]

function minOfSorted(arr) {
    for (var i=0; i<arr.length; i++){
        if (arr[i] > arr[i+1]){
            return arr[i+1];
        }
    }
}

console.log(minOfSorted([13, 17, 18, 3, 5, 6, 8, 9, 10]));


function minOfSortedBinary(arr) { 
    let start=0, end=arr.length-1; 
    while (start<=end){ 
        let mid=Math.floor((start + end)/2); 
        if (arr[mid-1]>arr[mid]) return arr[mid]; 
        else if (arr[start] > arr[start+1]){
            return arr[start+1];
        }
        else if (arr[end] < arr[end-1]){
            arr[end];
        } else {
            start++;
            end--;
        } 
    } 
} 

console.log(minOfSortedBinary([13, 17, 18, 3, 5, 6, 8, 9, 10]));


function minOfSortedRecursion(arr, low = 0, high = arr.length - 1) {
    // define middle
    let middle = Math.floor((low + high) / 2);

    // not rotated
    if (arr[high] < arr[low]) {
        return arr[0];
    }

    // one element
    if (high === low) {
        return arr[low];
    }

    // check if middle+1 is minimum element
    if (middle < high && arr[middle + 1] < arr[middle]) {
        return arr[middle + 1];
    }

    // check if mid itself is min
    if (middle > low && arr[middle] < arr[middle - 1]) {
        return arr[middle];
    }

    // otherwise recurse left or right
    if (arr[high] > arr[middle]) {
        return minOfSorted(arr, low, middle - 1);
    } else {
        return minOfSorted(arr, middle - 1, high);
    }
}

console.log(minOfSortedRecursion([13, 17, 18, 3, 5, 6, 8, 9, 10]));


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// THURS
// ------------------------------------------------------------------------------------------------------------------------------------------------------


// https://leetcode.com/problems/two-sum/

const twoSums = (arr, target) => {
    let returnArray =[]
    for (var i=0; i<arr.length; i++){
        for (var j=i+1; j<arr.length; j++){
            if (arr[i] + arr[j] == target){
                returnArray.push(i);
                returnArray.push(j);
            }
        }h
    } return returnArray;
};

console.log(twoSums([2, 11, 7, 15], 9))

function twoSumsTV(nums, target) {
    let idx1 = 0;
    let idx2 = 1;
    const output = []; // 0(n2)
    while (idx1 !== nums.length) {
        if (nums[idx1] + nums[idx2] === target) {
            output.push(idx1);
            output.push(idx2);
            return output;
        } else if (idx2 === nums.length) {
            idx1++;            // by only incrementing idx1 under select conditions, our
            idx2 = idx1 + 1;   // while loop is actually running quite a bit slower than
        } else {               // a single for loop.
            idx2++;
        }
    }
}
console.log(twoSumsTV([2, 11, 7, 15], 9))



//0(n)
function twoSumBetter(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        let missingNumber = target - nums[i];
        if (map.hasOwnProperty(missingNumber)) { // 0(1)
            return [map[missingNumber], i];
        }
        map[missingNumber] = i;
    }
    return [];
}
console.log(twoSumBetter([2, 11, 7, 15], 9))

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].




// ------------------------------------------------------------------------------------------------------------------------------------------------------
// FRI
// ------------------------------------------------------------------------------------------------------------------------------------------------------




/* *1189. Maximum Number of Balloons
 * Given a string text you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */

const Balloons = (text, word) => {
    charCountTxt = {};
    for(let x of text){
        if(charCountTxt.hasOwnProperty(x)){
            charCountTxt[x]++;
        }
        else{
            charCountTxt[x]=1;
        }
    }
    let count=0
    for (let i=0; true; i++){
        let idx=i%word.length
        if(charCountTxt[word[idx]]>0){
            charCountTxt[word[idx]]--;
        }
        else{
            break;
        }
        if(idx===word.length-1)count++
    }
    return count
};


console.log(Balloons("loonbalxbasdgaggfdgsgfdgllpoon", "balloon"));
console.log(Balloons("leetcode", "balloon"));
console.log(Balloons("nlaebolko", "balloon"));

const Balloons = (text, word = "balloon") => {
    if (text.length < word.length) { return 0; } // if the word we want is larger than text, give up
    let count = Infinity; // assume we have Infinity possible instances
    let wordDict = {}; // dicts for words and text
    let textDict = {};

    // build a dictionary out of the letters we want
    for (let letter of word) {

        if(wordDict.hasOwnProperty(letter)){
            wordDict[letter]++;
        }else{
            wordDict[letter] = 1;
        }
    }

    // build a dictionary out of the letters we have
    for (let letter of text) {
        textDict.hasOwnProperty(letter) ? textDict[letter]++ : textDict[letter] = 1;
    }

    // log the dicts for posterity
    console.log('text', textDict);
    console.log('words', wordDict);


    // loop over the letters we want
    for (let key of Object.keys(wordDict)) {
        // "b"
        let newAmount = Math.floor(textDict[key] / wordDict[key]);
        // find out how many words we can make with just that letter
        if (count > newAmount) {
            count = newAmount; // lower count
        }
    }
    return count;
};


console.log(Balloons("loonbalxballpoon", "balloon"));
// => 2Z