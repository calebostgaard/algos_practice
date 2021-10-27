


// 1695. Maximum Erasure Value (MEDIUM)
// You are given an array of positive integers nums and want to erase a subarray containing unique 
// elements. The score you get by erasing the subarray is equal to the sum of its elements. Return the 
// maximum score you can get by erasing exactly one subarray. An array b is called to be a subarray of a 
// if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

var maximumUniqueSubarray = function(nums) {
    let start =0;
    let end =0;
    let current_sum =0;
    let max_sum =0;
    let set= new Set();
    while(end<nums.length){
        if(!set.has(nums[end])){
            set.add(nums[end]);
            current_sum+=nums[end];
            max_sum = Math.max(max_sum , current_sum);
            end++
        } else{
            let deleteEl = nums[start];
            set.delete(deleteEl);
            current_sum=current_sum - deleteEl;
            start++;
        }
    }
    return max_sum
};

console.log(maximumUniqueSubarray([4,2,4,5,6]));
console.log(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]));



// 442. Find All Duplicates in an Array (MEDIUM)
// Given an integer array nums of length n where all the integers of nums are 
// in the range [1, n] and each integer appears once or twice, return an array 
// of all the integers that appears twice. You must write an algorithm that 
// runs in O(n) time and uses only constant extra space.

var findDuplicates = function(nums) {
    let checker = {};
    let returnArray = [];
    for (let i=0; i<nums.length; i++){
        if (!(nums[i] in checker)){
            checker[nums[i]] = 1;
        } else {
            returnArray.push(nums[i]);
        }
    }
    return returnArray;
};



// 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally 
// or vertically neighboring. The same letter cell may not be used more than once.

var existWordSearch = function(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] == word[0]) {
                if (snake(board, word, row, col)) return true
            }
        }
    }
    return false
};

var snake = function(board, word, row, col) {
    if (board[row][col] == word[0]) {
        if (word.length == 1) return true
        let saved = board[row][col]
        board[row][col] = null
        if (row + 1 < board.length && snake(board, word.slice(1), row + 1, col)) return true
        if (row - 1 >= 0 && snake(board, word.slice(1), row - 1, col)) return true  
        if (col + 1 < board[0].length && snake(board, word.slice(1), row, col + 1)) return true
        if (col - 1 >= 0 && snake(board, word.slice(1), row, col - 1)) return true
        board[row][col] = saved
    }
    return false
}

console.log(existWordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"));
console.log(existWordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"));
console.log(existWordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"));





// 212. Word Search II
// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are 
// horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

var findWordsWordSearch = function(board, words) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            for (let word = 0; word < board[0].length; col++) {
                if (board[row][col] == word[0]) {
                    if (snake2(board, word, row, col)) return true
                }
            }
        }
    }
    return false
};

var snake2 = function(board, word, row, col) {
    if (board[row][col] == word[0]) {
        if (word.length == 1) return true
        let saved = board[row][col]
        board[row][col] = null
        if (row + 1 < board.length && snake2(board, word.slice(1), row + 1, col)) return true
        if (row - 1 >= 0 && snake2(board, word.slice(1), row - 1, col)) return true  
        if (col + 1 < board[0].length && snake2(board, word.slice(1), row, col + 1)) return true
        if (col - 1 >= 0 && snake2(board, word.slice(1), row, col - 1)) return true
        board[row][col] = saved
    }
    return false
}

console.log(findWordsWordSearch([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]));
console.log(findWordsWordSearch([["a","b"],["c","d"]], ["abcb"]));





// 11. Container With Most Water
// Given n non-negative integers a1, a2, ..., an , where each represents a point at 
// coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the 
// line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis 
// forms a container, such that the container contains the most water.

// Notice that you may not slant the container.


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

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
console.log(maxArea([4,3,2,1,4])); // 16
console.log(maxArea([1,2,1])); // 2
// console.log(maxArea()); // 





// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.


// exceeds time limit
var rotate = function(nums, k) {
    for (let i=0; i<k; i++){
        nums.unshift(nums.pop())
    }
    return nums
};

// takes one portion, moves slice forward, populates values up to it
var rotateV2 = function(nums, k) {
    if(k >= nums.length){
        k = k % nums.length;
        if(k === 0){
            return nums;
        }
    }
    let temp = nums.slice(nums.length-k);
    for(let j = nums.length-1; j>k-1; j--){
        nums[j] = nums[j-k];
    }
    for(let i = 0; i< temp.length; i++){
        nums[i] = temp[i];
    }
    return nums;
};

console.log(rotate(nums = [1,2,3,4,5,6,7], k = 3)); // [5,6,7,1,2,3,4]
console.log(rotate(nums = [-1,-100,3,99], k = 2)); // [3,99,-1,-100]
// console.log(rotate()); // 





// 986. Interval List Intersections
// You are given two lists of closed intervals, firstList and secondList, where 
// firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list 
// of intervals is pairwise disjoint and in sorted order. Return the intersection 
// of these two interval lists. A closed interval [a, b] (with a <= b) denotes 
// the set of real numbers x with a <= x <= b. The intersection of two closed 
// intervals is a set of real numbers that are either empty or represented as 
// a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].


var intervalIntersection = function(firstList, secondList) {
    let i = 0, j = 0;
    let arr = [];
    
    while (i<firstList.length && j<secondList.length){
        let low = Math.max(firstList[i][0], secondList[j][0]);
        let high = Math.min(firstList[i][1], secondList[j][1]);
        if (low <= high) {
            arr.push([low,high])
        }
        if (firstList[i][1] < secondList[j][1]) {
            i++
        } else {j++}
    } return arr
};


console.log(intervalIntersection(firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]])); // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
console.log(intervalIntersection(firstList = [[1,3],[5,9]], secondList = [])); // []
console.log(intervalIntersection(firstList = [], secondList = [[4,8],[10,12]])); // []
console.log(intervalIntersection(firstList = [[1,7]], secondList = [[3,10]])); //  [[3,7]]
// console.log(intervalIntersection()); // 



var test = function(x, k) {
    while (k--){
        console.log(x[k])
    }
};

test([1,2,3,4,5,6,7,8,9], 3)




// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

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








// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining 
// the relative order of the non-zero elements. Note that you must do this in-place 
// without making a copy of the array.

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

console.log(moveZeroes(nums = [0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes(nums = [0])); // [0]
// console.log(moveZeroes()); // 



// 567. Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

var permuteString = function(s) {
    // let sArr = s.split('');
    // let len = sArr.length;
    // let permArray = [];
    // for (let i=0; i<len-1; i++){
    //     let sub = [sArr[]]
    //     permArray.push(sub.join(''))
    //     for (let j=0; j<len; j++){
    //         permArray.push();
    //     }

    // }
}

var checkInclusion = function(s1, s2) {
    let l = 0;
    let r = 0;
    let flag;
    const count = new Map();
    
    for (const c of s1) {
        count.set(c, count.get(c) + 1 || 1)
    }
    return count
};

console.log(checkInclusion(s1 = "ab", s2 = "eidbaooo")); // Output: true
console.log(checkInclusion(s1 = "ab", s2 = "eidboaoo")); // Output: false
// console.log(checkInclusion()); // 




// 994. Rotting Oranges
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten 
// orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a 
// fresh orange. If this is impossible, return -1.

var orangesRotting = function (grid) {
    
    this.grid = grid;
    this.height = grid.length;
    this.width = grid[0].length;
    var daysToRottenAll = 0;
    var freshTurnedIntoRotten = true;
    var codeOfRottenInPreviousRound = 2;//to keep track of rotten in each step.
    
    while (freshTurnedIntoRotten) {
        
        freshTurnedIntoRotten = false;
        for (let r = 0; r < this.height; r++) {
            for (let c = 0; c < this.width; c++) {
                if (this.grid[r][c] === 1 && freshIsNeighbourToRotten(r, c, codeOfRottenInPreviousRound)) {
                    this.grid[r][c] = codeOfRottenInPreviousRound + 1;
                    freshTurnedIntoRotten = true;
                }
            }
        }
        
        if (freshTurnedIntoRotten) {
            codeOfRottenInPreviousRound++;
            daysToRottenAll++;
        }
    }
    return gridHasNoFreshOranges() ? daysToRottenAll : -1;
};

/**
 * @param {number} r
 * @param {number} c
 * @param {number} codeOfRottenInPreviousRound
 * @return {boolean}
 */
function freshIsNeighbourToRotten(r, c, codeOfRottenInPreviousRound) {
    return (r - 1 >= 0 && this.grid[r - 1][c] === codeOfRottenInPreviousRound)
    || (r + 1 < this.height && this.grid[r + 1][c] === codeOfRottenInPreviousRound)
    || (c - 1 >= 0 && this.grid[r][c - 1] === codeOfRottenInPreviousRound)
    || (c + 1 < this.width && this.grid[r][c + 1] === codeOfRottenInPreviousRound);
}

/**
 * @return {boolean}
 */
function gridHasNoFreshOranges() {
    for (let r = 0; r < this.height; r++) {
        for (let c = 0; c < this.width; c++) {
            if (this.grid[r][c] === 1) {
                return false;
            }
        }
    }
    return true;
}


console.log(orangesRotting(grid = [[2,1,1],[1,1,0],[0,1,1]])); //  4
console.log(orangesRotting(grid = [[2,1,1],[0,1,1],[1,0,1]])); // -1
console.log(orangesRotting(grid = [[0,2]])); // 0
// console.log(orangesRotting()); // 



// 6. ZigZag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of 
// rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

var convertZigZag = function(s, numRows) {
    // let arr = s.split('');
    // let str = s.concat(s[0], s[4], s[8], s[12])
    // str = str.concat(s[1], s[3], s[5], s[7], s[9], s[11], s[13])
    // str = str.concat(s[2], s[6], s[10])
    var result = Array(numRows).fill('');
    var step = 1, index = 0;
    for(var i = 0; i < s.length; i++){
        result[index] += s[i];
        if(index === 0){
            step = 1;
        }else if(index === numRows - 1){
            step = -1;
        }
        index += step;
    }
    return result.join('');
};

console.log(convertZigZag(s = "PAYPALISHIRING", numRows = 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convertZigZag(s = "PAYPALISHIRING", numRows = 4)); // Output: "PINALSIGYAHRPI"
console.log(convertZigZag(s = "A", numRows = 1)); // Output: "A"
// console.log(convertZigZag()); // 




// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer 
// range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


var reverseInt = function(x) {
    let reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};

console.log(reverseInt(x = 123)); // 321
console.log(reverseInt(x = -123)); // -321
console.log(reverseInt(x = 120)); // 21
console.log(reverseInt(x = -120)); // -21
console.log(reverseInt(x = 0)); // 0
// console.log(reverseInt()); // 




// 8. String to Integer (atoi)
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer 
// (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. 
// Read this character in if it is either. This determines if the final result is negative 
// or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input 
// is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were 
// read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the 
// integer so that it remains in the range. Specifically, integers less than -231 should be 
// clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the 
// string after the digits.


var myAtoi = function(str) {
    var isNegative = undefined;
    var hasStart = false;
    var arr = [];
    for (i = 0; i < str.length; i++) {
        if (!hasStart) {
            if (str[i] === " ") {
                continue;
            }
            if (str[i] === "-") {
                isNegative = true;
                hasStart = true;
                continue;
            } else if (str[i] === "+") {
                isNegative = false;
                hasStart = true;
                continue;
            } else if (parseInt(str[i]) >= 0) {
                if (isNegative === undefined) {
                    isNegative = false;
                    hasStart = true;
                }
                arr.push(str[i]);
                continue;
            }
            return 0;
        } else {
		    // parseInt not Number(), because the latter will turn " " into 0.
            if (parseInt(str[i]) >= 0) {
                arr.push(str[i]);
            } else {
                break;
            }
        }
    }
    const num = Number(arr.join(""));
    if (isNegative && num > Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
    if (!isNegative && num > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    return isNegative ? -num : num;
};


console.log(myAtoi(s = "42")); // Output: 42
console.log(myAtoi(s = "   -42")); // Output: -42
console.log(myAtoi(s = "4193 with words")); // Output: 4193
console.log(myAtoi(s = "words and 987")); // Output: 0
console.log(myAtoi(s = "-91283472332")); // Output: -2147483648
// console.log(myAtoi()); // 


// 12. Integer to Roman
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 
// is written as XII, which is simply X + II. The number 27 is written as XXVII, which 
// is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, 
// the numeral for four is not IIII. Instead, the number four is written as IV. Because 
// the one is before the five we subtract it making four. The same principle applies to 
// the number nine, which is written as IX. There are six instances where subtraction is 
// used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

var intToRoman = function(num) {
    let roman = ""
    if (num/1000 >= 1){
        roman += ("M").repeat(Math.floor(num/1000))
        num %= 1000
    }
    if (num >= 900) {
        roman += "CM"
        num -= 900
    }
    if (num >= 500){
        roman += "D"
        num -= 500
    }
    if (num >= 400) {
        roman += "CD"
        num -= 400
    }
    if (num/100 >= 1){
        roman += ("C").repeat(Math.floor(num/100))
        num %= 100
    }
    if (num >= 90) {
        roman += "XC"
        num -= 90
    }
    if (num >= 50){
        roman += "L"
        num -= 50
    }
    if (num >= 40) {
        roman += "XL"
        num -= 40
    }
    if (num/10 >= 1){
        roman += ("X").repeat(Math.floor(num/10))
        num %= 10
    }
    if (num >= 9) {
        roman += "IX"
        num -= 9
    }
    if (num >= 5){
        roman += "V"
        num -= 5
    }
    if (num >= 4) {
        roman += "IV"
        num -= 4
    }
    if (num >= 1){
        roman += ("I").repeat(Math.floor(num))
    }
    return roman;
};


// Short Version
function intToRomanSV(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';
    Object.entries(map).forEach(([letter, n]) => {
        result += letter.repeat(Math.floor(num / n));
        num %= n;
    });
    return result;
}

console.log(intToRoman(num = 3)); // Output: "III"
console.log(intToRoman(num = 4)); // Output: "IV"
console.log(intToRoman(num = 9)); // Output: "IX"
console.log(intToRoman(num = 20)); // Output: "XX"
console.log(intToRoman(num = 58)); // Output: "LVIII"
console.log(intToRoman(num = 1994)); // Output: "MCMXCIV"
// console.log(intToRoman()); // 



// 904. Fruit Into Baskets
// You are visiting a farm that has a single row of fruit trees arranged from left to 
// right. The trees are represented by an integer array fruits where fruits[i] is the 
// type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict 
// rules that you must follow:
// You only have two baskets, and each basket can only hold a single type of fruit. 
// There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every 
// tree (including the start tree) while moving to the right. The picked fruits must 
// fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

var totalFruit = function(fruits) {
    let len = fruits.length;
    let count1 = 1;
    let count1Type = 0;
    let count2 = 1;
    let count2Type = 0;
    let maxOutput = 0;
    let tempCount = 1;
    for (let i=0; i<len-1; i++){
        tempCount = 1
        for (let k=i+1; k<len; k++){
            if (fruits[])
        }
    }

};

console.log(totalFruit(fruits = [1,2,1])); // Output: 3
console.log(totalFruit(fruits = [0,1,2,2])); // Output: 3
console.log(totalFruit(fruits = [1,2,3,2,2])); // Output: 4
console.log(totalFruit(fruits = [3,3,3,1,2,1,1,2,3,3,4])); // Output: 5
// console.log(totalFruit()); // 