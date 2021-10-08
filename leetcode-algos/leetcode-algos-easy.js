

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