

// 268. Missing Number (EASY)
// Given an array nums containing n distinct numbers in the range [0, n], return 
// the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    let missing = 0
    let sorted = [...new Set(nums.sort((a,b) => a - b))]
    if (!(nums[0] == 0)){return 0};
    for(let i=0; i<nums.length; i++){
        if(!((nums[i]+1) == nums[i+1])){
            return (nums[i]+1);
        }
    } return nums.length;
};
        
console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
console.log(missingNumber([0])); // 1



// 448. Find All Numbers Disappeared in an Array (EASY)
// Given an array nums of n integers where nums[i] is in the range [1, n], return 
// an array of all the integers in the range [1, n] that do not appear in nums.


var findDisappearedNumbers = function(nums) {
    let returner = [];
    for(let i=0; i<nums.length; i++){
        if (!(nums.includes(i+1))){
            console.log("if")
            returner.push(i+1)
        }
    } return returner;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));


// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers 
// such that they add up to target. You may assume that each input would have exactly one 
// solution, and you may not use the same element twice. You can return the answer in any order.


var twoSum = function(nums, target) {
    let mine = [];
    for(let i=0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            if ((nums[i] + nums[j] == target) && (i !== j)){
                mine = [i, j];
                return mine;
            }
        }
        
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));




// 167. Two Sum II - Input array is sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two 
// numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and 
// numbers[index2] where 1 <= first < second <= numbers.length. Return the indices of the two numbers, index1 
// and index2, as an integer array [index1, index2] of length 2. The tests are generated such that there is 
// exactly one solution. You may not use the same element twice.


var twoSum2 = function(numbers, target) {
    let left = 0;
    let right = numbers.length -1;;

    while(left <= right) {
        let sum = numbers[left] + numbers[right];
        if(sum == target) {
            return [left +1, right+1];
        }
        else if (sum < target) {left+=1;}
        else {right-=1;}
    }
};

console.log(twoSum2([2,7,11,15], 9));
console.log(twoSum2([2,3,4], 6));
console.log(twoStwoSum2um([-1,0], -1));


// 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as 
// forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {
    let left = 0;
    let right = x.toString().length-1;

    while(left <= right) {
        if(!(x.toString().charAt(left) == x.toString().charAt(right))) {return false}
        else {
            right-=1;
            left+=1;
        }
    } return true
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
console.log(isPalindrome(11));


// 13. Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two one's added together. 
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. The same principle applies 
// to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



var romanToInt = function(s) {
    let romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let total = 0;

    for(let i=0; i<s.length; i++){
        if (romans[s.charAt(i)] < romans[s.charAt(i+1)]){
            total += romans[s.charAt(i+1)] - romans[s.charAt(i)];
            i++;
        } else {total += romans[s.charAt(i)]}
    }
    return total;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));



// Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    for(let i=0; i<nums.length; i++){
        if (nums[i] == 1){
            let tempMax = 1
            for(let j=i+1; j<nums.length; j++){
                if (nums[j] == 1){
                    tempMax ++;
                    console.log(tempMax)
                }
            } if (tempMax > maxOnes) {
                maxOnes = tempMax
                console.log("my new temp max is " + maxOnes)
            }
        }
    } 
    return "My max " + maxOnes
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
console.log(findMaxConsecutiveOnes([1,1,0,1]));


// Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        let stringNum = "";
        stringNum = nums[i].toString();
        if (stringNum.length % 2 == 0){
            count ++;
        }
    } return "Total number of even numbers: " + count;
};

console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]));
// console.log(findNumbers());



// Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an 
// array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    let newArray = [];
    for(let i=0; i<nums.length; i++){
        newArray.push((nums[i])*nums[i])
    }
    return newArray.sort(function(a, b){return a - b})
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
// console.log(sortedSquares());





// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    if (!strs[0]) {return ""}

    let preprefix = '';
    let prefix = '';
    for(var index = 0; index < strs[0].length; index++){
        prefix += strs[0][index];
        for(var i = 0; i < strs.length; i++){
            if(!strs[i].startsWith(prefix)){
                return preprefix;
            }
        }
        preprefix = prefix;
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log("hi testing")
// console.log(longestCommonPrefix());



// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


var isValid = function(s) {
    let tracker = [];
    for(var i = 0; i < s.length; i++){
        if (!(s[i] == ")" || s[i] == "}" || s[i] == "]")) {
            tracker.push(s[i])
        }        
        else if (s[i] == ")" && tracker[tracker.length - 1] == "("){
            tracker.pop()
        }
        else if (s[i] == "}" && tracker[tracker.length - 1] == "{"){
            tracker.pop()
        }
        else if (s[i] == "]" && tracker[tracker.length - 1] == "["){
            tracker.pop()
        } else {return false}
    } return tracker.length ? false : true
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([)]")); //false
console.log(isValid("{[]}")); //true
// console.log(isValid());


// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove 
// the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, 
// you must instead have the result be placed in the first part of the array nums. 
// More formally, if there are k elements after removing the duplicates, then 
// the first k elements of nums should hold the final result. It does not matter 
// what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this 
// by modifying the input array in-place with O(1) extra memory.

// Custom Judge:
// The judge will test your solution with the following code:

//         int[] nums = [...]; // Input array
//         int[] expectedNums = [...]; // The expected answer with correct length

//         int k = removeDuplicates(nums); // Calls your implementation

//         assert k == expectedNums.length;
//         for (int i = 0; i < k; i++) {
//             assert nums[i] == expectedNums[i];
//         }
// If all assertions pass, then your solution will be accepted.


function removeDuplicates(nums) {
    let numCount = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[numCount] = nums[i];
            numCount++;
        }
    }
    nums = nums.slice(0, numCount)
    return numCount;
}

console.log(removeDuplicates([1,1,2])); // 2, nums = [1,2,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //
// console.log(removeDuplicates()); // 5, nums = [0,1,2,3,4,_,_,_,_,_]



// 27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of 
// val in nums in-place. The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages, 
// you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the 
// first k elements of nums should hold the final result. It does not matter what you leave 
// beyond the first k elements. Return k after placing the final result in the first 
// k slots of nums. Do not allocate extra space for another array. You must do this by 
// modifying the input array in-place with O(1) extra memory.

var removeElement = function(nums, val) {
    while (nums.indexOf(val) !== -1) {
        let valIndex = nums.indexOf(val)
        for (let i = valIndex; i < nums.length; i++) {
            nums[i] = nums [i+1];
        } nums.pop();
    }
    return "k = " + nums.length + ", Nums: " + nums
};

console.log(removeElement([3,2,2,3], 3)); // 2, nums = [2,2,_,_]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5, nums = [0,1,4,0,3,_,_,_]
console.log(removeElement([3,2,2,3], 3)); // 5, nums = [0,1,4,0,3,_,_,_]
// console.log(removeElement()); // 





// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.


var moveZeroes = function(nums) {
    let count = 0;
    while (nums.indexOf(0) !== -1) {
        let valIndex = nums.indexOf(0)
        for (let i = valIndex; i < nums.length; i++) {
            nums[i] = nums [i+1];
        } 
        nums.pop();
        count++;
    }
    if (count !== 0){
        for (var i = 0; i < count; i++){
            nums.push(0)
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
// console.log(moveZeroes()); // 


// 1184. Distance Between Bus Stops
// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the 
// distance between all pairs of neighboring stops where distance[i] is the 
// distance between the stops number i and (i + 1) % n. The bus goes along both 
// directions i.e. clockwise and counterclockwise. Return the shortest distance 
// between the given start and destination stops.


var distanceBetweenBusStops = function(distance, start, destination) {
    const length = distance.length;

    let clockwise = 0;
    let counterclockwise = 0;
    let i = start;
    let j = start;
    
    while (i !== destination || j !== destination) {
        if (i !== destination) {
            clockwise += distance[i];
            i = (i + 1) % length;
        }

        if (j !== destination) {
            j = j === 0 ? length - 1 : j - 1;
            counterclockwise += distance[j];
        }
    }

    return Math.min(clockwise, counterclockwise);
};

console.log(distanceBetweenBusStops([1,2,3,4],0,1)); // 1
console.log(distanceBetweenBusStops([1,2,3,4],0,2)); // 3
console.log(distanceBetweenBusStops([1,2,3,4],0,3)); // 4
// console.log(distanceBetweenBusStops([1,2,3,4], )); // 





// 28. Implement strStr()
// Return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.
// Clarification: What should we return when needle is an empty string? 
// This is a great question to ask during an interview. For the purpose 
// of this problem, we will return 0 when needle is an empty string. This is 
// consistent to C's strstr() and Java's indexOf().

var strStr = function(haystack, needle) {
    if (needle.length == 0) {return 0};
    if (haystack == needle) {return 0};
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (needle === haystack.substring(i, i + needle.length)) {
            return i;
        }
    }
    return -1;
};

console.log(strStr()); // 
console.log(strStr()); // 
console.log(strStr()); // 
// console.log(strStr()); // 