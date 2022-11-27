/**
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]
    Example 2:

    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]
    Explanation: [4,9] is also accepted.
 */

const nums1 = [1,2,2,1]
const nums2 = [2,2]

function intersection(nums1: number[], nums2: number[]): number[] {
   const inters = nums1.filter(val => nums2.includes(val))
   const unique = Array.from(new Set(inters))

   return unique
   
};

console.log(intersection(nums1, nums2))
