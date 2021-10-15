// ------------------------------------------------------------------------------------------------------------------------------------------------------
// TUES
// ------------------------------------------------------------------------------------------------------------------------------------------------------




// Container With Most Water
// Given n non-negative integers a1, a2, ..., an , where each represents a point at 
// coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the 
// line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis 
// forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

//  original version
var maxArea = function(height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        let tempArea = 0;
        for (let j = i+1; j < height.length; j++) {
            tempArea = ((j-i)*(Math.min(height[i], height[j])));
            if (tempArea > maxArea){
                maxArea = tempArea;
            }
        }
    } return maxArea;
};


// quicker version
var maxAreaV2 = function(height) {
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    } return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
console.log(maxArea([4,3,2,1,4])); // 16
console.log(maxArea([1,2,1])); // 2
// console.log(maxArea()); // 





// ------------------------------------------------------------------------------------------------------------------------------------------------------
// WED
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.
// Can use the past algo, isPalindrome(),  or develop own method

function isPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] == string[string.length - i - 1]) {
            continue
        }
        else { return false }
    }
    return true
}

var longestPalindrome = function(s) {
    let maxPal = "";
    let maxPalCount = 0;
    let len = s.length
    for (let j = 0; j < len; j++) {
        for (let k = j+1; k <= len; k++) {
            let tempPal = s.substring(j,k)
            if (maxPalCount > s.substring(j,(len-1)).length) {return maxPal}
            if (isPalindrome(tempPal) == true){
                if (tempPal.length > maxPalCount) {
                    maxPalCount = tempPal.length;
                    maxPal = tempPal;
                }
            } 
        }
    } return maxPal
}

console.log(longestPalindrome(s = "babad")); // "bab"
console.log(longestPalindrome(s = "cbbd")); // "bb"
console.log(longestPalindrome(s = "a")); // "a"
console.log(longestPalindrome(s = "ac")); // "a"
// console.log(longestPalindrome()); // 
