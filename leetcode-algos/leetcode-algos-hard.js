
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
