type Triplet = [number, number, number]

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
    const sortedArr = array.sort((a, b) => a - b)
    const result: Triplet[] = []

    for (let i = 0; i < sortedArr.length; i++) {
        let headIdx = i + 1
        let tailIdx = sortedArr.length - 1

        while (tailIdx > headIdx) {
            const current = sortedArr[i]
            const head = sortedArr[headIdx]
            const tail = sortedArr[tailIdx]
            const sum = current + head + tail

            if (sum === targetSum) {
                result.push([current, head, tail])
                headIdx++
                tailIdx--
                continue
            }

            if (sum < targetSum) {
                headIdx++
                continue
            }

            if (sum > targetSum) {
                tailIdx--
                continue
            }
        }
    }

    return result
}
