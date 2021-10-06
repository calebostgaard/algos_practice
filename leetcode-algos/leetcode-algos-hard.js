
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
