


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
            for (let word = 0; wprd < board[0].length; col++) {
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