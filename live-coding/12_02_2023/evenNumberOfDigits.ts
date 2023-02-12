function findNumbers(nums: number[]): number {
    let counter = 0;

    nums.forEach(n => {
        const numbersCount = String(n).split('').length
        const isEvent = !(numbersCount % 2)

        if (isEvent) {
            counter++
        }
    })

    return counter;
};

console.log(findNumbers([12,345,2,6,7896]))
