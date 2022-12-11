// https://leetcode.com/problems/two-sum/submissions/858096444/

// function twoSum(nums: number[], target: number): number[] {
//     let result: number[] = [];
//     const candidates: {number: number, index: number}[] = []

//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
        
//         const firstPart = candidates.find(({number}) => {
//             return number + element === target
//         })

//         if (firstPart) {
//            result  = [firstPart.index, i]
//            break;
//         } else {
//             candidates.push({
//                 number: element,
//                 index: i
//             })
//         }

//     }

//     return result;
// };

function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];
        
       for (let j = i + 1; j < nums.length; j++) {
            const secondNum = nums[j];
        
            if (firstNum + secondNum === target) {
                return [i, j]
            }
       }

    }

    return result;
};

console.log(twoSum([2,7,11,15], 9))

