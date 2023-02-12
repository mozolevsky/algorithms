function findMaxConsecutiveOnes(nums: number[]): number {
    let currentChain = 0;
    let maxChain = 0
    
    for (let i = 0; i <= nums.length; i++) {
        const current = nums[i]
        
        if (current) {
            currentChain++
        } else {
            maxChain = maxChain < currentChain ? currentChain : maxChain;
            currentChain = 0;
        }
    }
    
    return maxChain;
};


console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
