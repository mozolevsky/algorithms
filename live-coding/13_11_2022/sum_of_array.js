// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


const nums = [1,2,3,4];

// Runtime: 68 ms, faster than 95.67% of TypeScript online submissions for Running Sum of 1d Array.
// Memory Usage: 44.8 MB, less than 39.00% of TypeScript online submissions for Running Sum of 1d Array.
function runningSum(nums) {
    let currentSum = 0;

    return nums.map((v, i) => {
        currentSum = i === 0 ? 0 : currentSum + nums[i -1]

        return currentSum + v;
    })
};

console.log(runningSum(nums))
