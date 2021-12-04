export function mergeOverlappingIntervals(array: number[][]) {
    const sortedArr = array.sort(([a1, b1], [a2, b2]) => {
        return a1 - a2
    })

    let merge = true

    while (merge) {
        for (let i = 0; i < sortedArr.length - 1; i++) {
            merge = false
            const [a1, b1] = sortedArr[i]
            const [a2, b2] = sortedArr[i + 1]

            if (b1 >= a2) {
                sortedArr[i] = []
                sortedArr[i + 1] = [a1, b2 > b1 ? b2 : b1]
                merge = true
            }
        }
    }

    return sortedArr.filter((item) => item.length)
}
