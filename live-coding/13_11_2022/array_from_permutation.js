/**
 * Given a zero-based permutation nums (0-indexed), build an array ans of the same length where 
 * ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it. 
 * 
 * */

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// [
//     nums[nums[0]], 
//     nums[nums[1]], 
//     nums[nums[2]], 
//     nums[nums[3]], 
//     nums[nums[4]], 
//     nums[nums[5]]
// ]

const nums = [5,0,1,2,3,4]

function buildArray(nums) {
    return nums.map((val, idx) => {
        const tempIdx = nums[idx]; 

        return nums[tempIdx];

    })
};

console.log(buildArray(nums))
