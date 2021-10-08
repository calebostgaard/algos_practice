


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