// https://leetcode.com/problems/sort-array-by-parity/

// v1
// const arr = [3,1,2,4];
// const isOdd = (num: number) => num % 2 === 1;

// function sortArrayByParity(nums: number[]): number[] {
//     const odd: number[] = []
//     const even: number[] = []
    
//     nums.forEach(el => {
//         if (isOdd(el)) {
//             odd.push(el)
//         } else {
//             even.push(el)
//         }
//     })

//     return even.concat(odd)
// };

// v2

const arr = [3,1,2,4];

const isOdd = (num: number) => num % 2 === 1;
const isEven = (num: number) => !isOdd(num)

function sortArrayByParity(nums: number[]): number[] {
   let startIdx = 0;
   let endIdx = arr.length - 1;

   while(startIdx <= endIdx) {
    const leftEl = arr[startIdx]
    const rightEl = arr[endIdx]

    if(isEven(leftEl)) {
        startIdx++;
        continue;
    }

    if(isOdd(rightEl)) {
        endIdx--;
        continue;
    }

    // case where left is odd, right is even
    nums[startIdx] = rightEl;
    nums[endIdx] = leftEl;
    startIdx++;
    endIdx--;

   }  
   
   return nums;
};


// [2,4,3,1]

console.log(sortArrayByParity(arr))
