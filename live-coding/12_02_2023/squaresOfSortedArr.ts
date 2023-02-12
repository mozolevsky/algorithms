function sortedSquares(nums: number[]): number[] {
    return nums.map(n => n < 0 ? Math.abs(n) : n).sort((a, b) => a - b).map(n => n * n)

};

const arr1 = [-4,-1,0,3,10]

console.log(sortedSquares(arr1))
