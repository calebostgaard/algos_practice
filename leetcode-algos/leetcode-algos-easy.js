

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







// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the 
// index if the target is found. If not, return the index where it would be 
// if it were inserted in order. You must write an algorithm with O(log n) 
// runtime complexity.

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start+end)/2);
        if (nums[mid] == target) {return mid}
        else if (nums[mid] > target){
            end = mid - 1;
        } else {start = mid + 1}
    } return start;
};

console.log(searchInsert([1,3,5,6], target = 5)); // 2
console.log(searchInsert([1,3,5,6], target = 2)); // 1
console.log(searchInsert([1,3,5,6], target = 7)); // 4
console.log(searchInsert([1,3,5,6], target = 0)); // 0
console.log(searchInsert([1], target = 0)); // 0
// console.log(searchInsert()); // 



// 88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and 
// two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside 
// the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements 
// denote the elements that should be merged, and the last n elements are set to 0 and should 
// be ignored. nums2 has a length of n.



var merge = function(nums1, m, nums2, n) {
    let len1 = nums1.length - m
    for (let i=0; i<len1; i++){
        nums1.pop()
    }
    for (let j=0; j<n; j++){
        nums1.push(nums2[j])
    }
    return nums1.sort(function(a, b){return a - b});
};


console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3)); // [1,2,2,3,5,6]
console.log(merge(nums1 = [1], m = 1, nums2 = [], n = 0)); // [1]
console.log(merge(nums1 = [0], m = 0, nums2 = [1], n = 1)); // [1]
// console.log(merge()); // 



// 541. Reverse String II WRONG!!!
// Given a string s and an integer k, reverse the first k characters for 
// every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. If 
// there are less than 2k but greater than or equal to k characters, 
// then reverse the first k characters and left the other as original.

var reverseStringsHelper = function(s) {
    let arr = s.split('');
    let len = arr.length;
    for(var i=0; i< len/2; i++){
        let temp = arr[i];
        arr[i] = arr[len-i-1];
        arr[len-i-1] = temp;
    }
    s = arr.join('')
    return s
};

var reverseStr = function(s, k) {
    let beg = reverseStringsHelper(s.slice(0,k-1));
    let end = s.slice(k, s.length-1);
    s = beg.concat(end);
    return s;
};


console.log(reverseStr(s = "abcdefg", k = 2)); // Output: "bacdfeg"
console.log(reverseStr(s = "abcd", k = 2)); // Output: "bacd"
// console.log(reverseStr()); // 





// 557. Reverse Words in a String III
// Given a string s, reverse the order of characters in each word within 
// a sentence while still preserving whitespace and initial word order.

var reverseStrings = function(s) {
    let arr = s.split('');
    let len = arr.length;
    for(var i=0; i< len/2; i++){
        let temp = arr[i];
        arr[i] = arr[len-i-1];
        arr[len-i-1] = temp;
    }
    s = arr.join('')
    return s
};

var reverseWords = function(s) {
    let arr = s.split(" ")
    let len = arr.length;
    for (let i=0; i<len; i++){
        arr[i] = reverseStrings(arr[i])
    }
    s = arr.join(' ');
    return s;
};

console.log(reverseWords(s = "Let's take LeetCode contest")); // Output: "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords(s = "God Ding")); // Output: "doG gniD"
// console.log(reverseWords()); // 







// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.

var reverseString = function(s) {
    let len = s.length;
    for(var i=0; i< len/2; i++){
        let temp = s[i];
        s[i] = s[len-i-1];
        s[len-i-1] = temp;
    }
    return s
};


console.log(reverseString(s = ["h","e","l","l","o"])); // Output: ["o","l","l","e","h"]
console.log(reverseString(s = ["H","a","n","n","a","h"])); // Output: ["h","a","n","n","a","H"]
// console.log(reverseString()); // 





// 876. Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    let A = [head];
    while (A[A.length - 1].next != null)
        A.push(A[A.length - 1].next);
    return A[Math.floor(A.length / 2)];
};

console.log(middleNode(head = [1,2,3,4,5])); // Output: [3,4,5]
console.log(middleNode(head = [1,2,3,4,5,6])); // Output: [4,5,6]
// console.log(middleNode()); // 


// 812. Largest Triangle Area
// Given an array of points on the X-Y plane points where points[i] = [xi, yi], 
// return the area of the largest triangle that can be formed by any three different 
// points. Answers within 10-5 of the actual answer will be accepted.

var largestTriangleArea = function (points) {
    let max = 0
    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i + 1; j < points.length - 1; j++) {
            for (let k = j + 1; k < points.length; k++) {
                max = Math.max(area(points[i], points[j], points[k]), max)
            }
        }
    }
    return max

    function area([x1, y1], [x2, y2], [x3, y3]) {
        return Math.abs(
            x1 * (y2 - y3) + x2 * (y3 - y1)+ x3 * (y1 - y2)
        ) / 2
    }
};

console.log(largestTriangleArea(points = [[0,0],[0,1],[1,0],[0,2],[2,0]])); // Output: 2.00000
console.log(largestTriangleArea(points = [[1,0],[0,0],[0,1]])); // 0.50000
// console.log(largestTriangleArea()); // 



// 733. Flood Fill
// An image is represented by an m x n integer grid image where image[i][j]
//  represents the pixel value of the image.

// You are also given three integers sr, sc, and newColor. You should perform
//  a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels 
// connected 4-directionally to the starting pixel of the same color as the 
// starting pixel, plus any pixels connected 4-directionally to those pixels 
// (also with the same color), and so on. Replace the color of all of the 
// aforementioned pixels with newColor.

// Return the modified image after performing the flood fill.

var fillColor = function(image, sr, sc, color, newColor){
    if (image[sr][sc] == color){
        image[sr][sc] = newColor;
        if (sr >= 1) fillColor(image, sr-1, sc, color, newColor);
        if (sc >= 1) fillColor(image, sr, sc-1, color, newColor);
        if (sr+1 < image.length) fillColor(image, sr+1, sc, color, newColor);
        if (sc+1 < image[0].length) fillColor(image, sr, sc+1, color, newColor);
    }
}

var floodFill = function(image, sr, sc, newColor) {
    let color = image[sr][sc];
    if (color != newColor){
        fillColor(image, sr, sc, color, newColor);
    }
    return image;
};
console.log(floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2)); // Output: [[2,2,2],[2,2,0],[2,0,1]]
console.log(floodFill(image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2)); // Output: [[2,2,2],[2,2,2]]
// console.log(floodFill()); // 





// 292. Nim Game

// You are playing the following Nim Game with your friend:

// Initially, there is a heap of stones on the table.
// You and your friend will alternate taking turns, and you go first.
// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
// The one who removes the last stone is the winner.

// Given n, the number of stones in the heap, return true if you can win the game 
// assuming both you and your friend play optimally, otherwise return false.

var canWinNim = function(n) {
    return (n % 4 !== 0);
};


console.log(canWinNim(n = 4)); // false
console.log(canWinNim(n = 1)); // true
console.log(canWinNim(n = 2)); // true
// console.log(canWinNim()); // 






// 1025. Divisor Game

// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number n on the chalkboard. On each player's 
// turn, that player makes a move consisting of:

// Choosing any x with 0 < x < n and n % x == 0.
// Replacing the number n on the chalkboard with n - x.
// Also, if a player cannot make a move, they lose the game.

// Return true if and only if Alice wins the game, assuming both players play optimally.

var divisorGame = function(n) {
    return !(n%2)
};

console.log(divisorGame(n = 2)); // true
console.log(divisorGame(n = 3)); // false
// console.log(divisorGame()); // 




// 2042. Check if Numbers Are Ascending in a Sentence

// A sentence is a list of tokens separated by a single space with no leading or 
// trailing spaces. Every token is either a positive number consisting of digits 
// 0-9 with no leading zeros, or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" 
// and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers 
// in s are strictly increasing from left to right (i.e., other than the last number,
//      each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.


var areNumbersAscending = function(str) {
    let arr = str.split(' ');
    let arrNum = []
    let len = arr.length
    for (i = 0; i < len; i++) {
        if (parseInt(arr[i]) >= 0) {
            arrNum.push(parseInt(arr[i]));
        }
    }
    len = arrNum.length
    for (i = 0; i < len-1; i++) {
        if (arrNum[i+1] <= arrNum[i]){
            return false
        }
    }
    return true;
};

console.log(areNumbersAscending(s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles")); // Output: true
console.log(areNumbersAscending(s = "hello world 5 x 5")); // Output: false
console.log(areNumbersAscending(s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s")); // Output: false
console.log(areNumbersAscending(s = "4 5 11 26")); // Output: true
// console.log(areNumbersAscending()); // 




// 1859. Sorting the Sentence

// A sentence is a list of words that are separated by a single space with no 
// leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each
//  word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 
// a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and 
// return the original sentence.


var sortSentence = function(s) {
    let sorted = [];
    for (let str of s.split(" ") ) {
        let index = str[str.length - 1] - 1;
        sorted[index] = str.slice(0, str.length - 1);
    }
    return sorted.join(" ");
};

console.log(sortSentence(s = "is2 sentence4 This1 a3")); // Output: "This is a sentence"
console.log(sortSentence(s = "Myself2 Me1 I4 and3")); // Output: "Me Myself and I"
// console.log(sortSentence()); // 



// 929. Unique Email Addresses
// // Every valid email consists of a local name and a domain name, separated by the '@' sign. 
// Besides lowercase letters, the email may contain one or more '.' or '+'.
// // For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the 
// domain name.
// // If you add periods '.' between some characters in the local name part of an email address, 
// mail sent there will be forwarded to the same address without dots in the local name. Note 
// that this rule does not apply to domain names.
// // For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// // If you add a plus '+' in the local name, everything after the first plus sign will be ignored. 
// This allows certain emails to be filtered. Note that this rule does not apply to domain names.
// // For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// // It is possible to use both of these rules at the same time.
// // Given an array of strings emails where we send one email to each email[i], return the number 
// of different addresses that actually receive mails.




var numUniqueEmails = function(emails) {
    let len = emails.length;
    let email = "";
    let newEm = ""
    let indexAt = 0;
    let indexPer = 0;
    let indexPlus = 0;

    for (let i=0; i<len; i++){
        email = emails[i];
        indexAt = emails[i].indexOf("@")
        indexPer = emails[i].indexOf(".")
        indexPlus = emails[i].indexOf("+")
        while(indexPlus > 0 && indexPlus < indexAt){
            indexPlus = email.indexOf("+")
            newEm = emails[i].substr(0, indexPlus) + emails[i].substr(indexAt, email.length-1)
            emails[i] = newEm
            indexAt = emails[i].indexOf("@")
            indexPlus = emails[i].indexOf("+")
        }
        while(indexPer > 0 && indexPer < indexAt){
            // indexPer = email.indexOf(".")
            newEm = emails[i].substr(0, indexPer) + emails[i].substr(indexPer+1, email.length-1)
            emails[i] = newEm
            indexAt = emails[i].indexOf("@")
            indexPer = emails[i].indexOf(".")
        }
    }
    let uniqueCount = 0;
    let unique = false;
    for (let i=0; i<len-1; i++){
        unique = true;
        for (let k=i+1; k<len; k++){
            if (emails[i] == emails[k]) {unique = false}
        }
        if (unique) uniqueCount++
    } uniqueCount++

    return uniqueCount;
};

console.log(numUniqueEmails(emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); // Output: 2
console.log(numUniqueEmails(emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"])); // Output : 3
// console.log(numUniqueEmails()); // 


// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    let len = nums.length
    let max = nums[0];
    if (len == 1) {return nums[0]};
    for (var j=0; j<len; j++){
        let tempSum = nums[j];
        if (tempSum > max) {
            max = tempSum
        }
        for (var i=j+1; i<len; i++){
            tempSum += nums[i]
            if (tempSum > max) {
                max = tempSum
            }
        }
    } 
    return (nums[len-1] > max) ? nums[len-1] : max
};
console.log(maxSubArray(nums = [-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray(nums = [1])); // Output: 1
console.log(maxSubArray(nums = [5,4,-1,7,8])); // Output: 23
// console.log(maxSubArray()); // Output: 




// 66. Plus One
// You are given a large integer represented as an integer array digits, where each 
// digits[i] is the ith digit of the integer. The digits are ordered from most 
// significant to least significant in left-to-right order. The large integer does 
// not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


var plusOne = function(digits) {
    console.log(parseInt(digits.join('')))
    let result = parseInt(digits.join('')) + 1;
    console.log(result)
    digits = result.toString().split("");
    return digits
};

// console.log(plusOne(digits = [1,2,3])); // Output: [1,2,4]
// console.log(plusOne(digits = [4,3,2,1])); // Output: [4,3,2,2]
// console.log(plusOne(digits = [0])); // Output: [1]
// console.log(plusOne(digits = [9])); // Output: [1,0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); // Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
// console.log(plusOne()); // Output: 