

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


