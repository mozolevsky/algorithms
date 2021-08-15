const swap = (arr: number[], idx1: number, idx2: number) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

export function selectionSort(array: number[]) {
    let idxPointer = 0

    while (idxPointer < array.length - 1) {
        let minIdx = idxPointer

        for (let i = idxPointer; i < array.length; i++) {
            if (array[i] < array[minIdx]) minIdx = i
        }

        swap(array, idxPointer, minIdx)
        idxPointer++
    }

    return array
}
