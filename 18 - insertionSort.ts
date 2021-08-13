const swapItems = (arr: number[], idx1: number, idx2: number) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

export function insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        let j = i

        while (j > 0 && array[j] < array[j - 1]) {
            swapItems(array, j, j - 1)
            j--
        }
    }

    return array
}
