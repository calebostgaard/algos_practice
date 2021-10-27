
// 41. First Missing Positive (HARD)
// Given an unsorted integer array nums, return the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses constant extra space.


var firstMissingPositive = function(nums) {
    let sorted = [...new Set(nums.sort((a,b) => a - b).filter(x => x > 0))]
    if(sorted[0] !== 1){
        return 1
    }
    for(i = 0; i< sorted.length; i++){
        if(sorted[i] > 0 && sorted[i + 1] !== sorted[i] + 1){
            return sorted[i] + 1
        }
    }
};

console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));



// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the 
// median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function(nums1, nums2) {
    let combo = [...nums1, ...nums2].sort((a,b) => a - b)
    if (combo.length%2 > 0) {return combo[ Math.floor(combo.length/2)]}
    else {
        let upperMid = combo.length/2;
        return ((combo[upperMid-1] + combo[upperMid]) / 2)
    }
};

console.log(findMedianSortedArrays(nums1 = [1,3], nums2 = [2])); // 2
console.log(findMedianSortedArrays(nums1 = [1,2], nums2 = [3,4])); // 2.5
console.log(findMedianSortedArrays(nums1 = [0,0], nums2 = [0,0])); // 0
console.log(findMedianSortedArrays(nums1 = [], nums2 = [1])); // 1
console.log(findMedianSortedArrays(nums1 = [2], nums2 = [])); // 2
console.log(findMedianSortedArrays(nums1 = [1,3], nums2 = [2,7])); // 2.5
// console.log(findMedianSortedArrays());




// 10. Regular Expression Matching
// Given an input string s and a pattern p, implement regular expression 
// matching with support for '.' and '*' where:
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

var isMatch = function(s, p) {
    if (s == p) {return true}
    if (p.includes("*")) {
        

    }
    
};

console.log(isMatch(s = "aa", p = "a")); // false
console.log(isMatch(s = "aa", p = "a*")); // true 
console.log(isMatch(s = "ab", p = ".*")); // true 
console.log(isMatch(s = "aab", p = "c*a*b")); // true
console.log(isMatch(s = "mississippi", p = "mis*is*p*.")); // false
// console.log(isMatch()); //



// 273. Integer to English Words
// Convert a non-negative integer num to its English words representation.

var numberToWords = function(num) {
    let result = [];
    const numDic = { 0:"Zero", 1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 6:"Six", 7:"Seven", 8:"Eight", 9:"Nine",
    10:"Ten", 11:"Eleven", 12:"Twelve", 13:"Thirteen", 14:"Fourteen", 15:"Fifteen", 16:"Sixteen", 17:"Seventeen", 18:"Eighteen", 19:"Nineteen",
    20:"Twenty", 30:"Thirty", 40:"Forty", 50:"Fifty", 60:"Sixty", 70:"Seventy", 80:"Eighty", 90:"Ninety" };
    var blockNums = ["Hundred", "Thousand", "Million", "Billion"];
    var left;
    var divider = 1000000000;
    var current;
    var index = 4;
    
    if (num === 0) {
        return numDic[0];
    }
    
    while (num > 0) {
        index--;
        current = (num / divider) >> 0;
        num %= divider;
        divider /= 1000;
        if (current === 0) {
            continue;
        }
        left = current;
        
        if (left >= 100) {
            result.push(numDic[(left / 100) >> 0], blockNums[0]);
            left %= 100;
        } 

        if (left > 9) {
            if (left < 20) {
                result.push(numDic[left]);
                left = 0;
            } else {
                result.push(numDic[left - (left %= 10)]);
            }
        }

        if (left > 0) {
            result.push(numDic[left]);
        }

        if (current > 0 && index !== 0) {
            result.push(blockNums[index]);
        }
    }
    return result.join(" ");
};

console.log(numberToWords(num = 123)); // Output: "One Hundred Twenty Three"
console.log(numberToWords(num = 12345)); // Output: "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(num = 1234567)); // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
console.log(numberToWords(num = 1234567891)); // Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
// console.log(numberToWords()); //