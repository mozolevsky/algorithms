export function twoNumberSum(array: number[], targetSum: number) {
    let result: [] | [number, number] = []

    const map: Record<number, number> = {}

    for (let i = 0; i <= array.length; i++) {
        const currentElem = array[i]

        const secondPartCandidate =
            targetSum > 0
                ? currentElem > 0
                    ? targetSum - currentElem
                    : -(targetSum + currentElem)
                : currentElem > 0
                ? targetSum + currentElem
                : targetSum - currentElem

        if (!map[currentElem]) {
            map[secondPartCandidate] = currentElem
        } else {
            result = [map[currentElem], currentElem]
            break
        }
    }

    return result
}
