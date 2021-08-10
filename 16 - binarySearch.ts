const findIndex = (
    arr: number[],
    target: number,
    startIdx: number,
    endIdx: number
): number => {
    let middleIdx = ~~((startIdx + endIdx) / 2)
    let middle = arr[middleIdx]

    if (startIdx === endIdx) {
        return middle === target ? middleIdx : -1
    }

    if (target < middle) {
        return findIndex(arr, target, startIdx, middleIdx)
    }

    if (target > middle) {
        return findIndex(arr, target, middleIdx + 1, endIdx)
    }

    return middleIdx
}

export function binarySearch(array: number[], target: number): number {
    return findIndex(array, target, 0, array.length - 1)
}
