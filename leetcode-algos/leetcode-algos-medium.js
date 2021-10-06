


// 1695. Maximum Erasure Value (MEDIUM)
// You are given an array of positive integers nums and want to erase a subarray containing unique 
// elements. The score you get by erasing the subarray is equal to the sum of its elements. Return the 
// maximum score you can get by erasing exactly one subarray. An array b is called to be a subarray of a 
// if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).





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


