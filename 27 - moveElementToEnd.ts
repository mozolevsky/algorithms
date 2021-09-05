// First approach
const shift = (arr: number[], idx: number) => {
    const movedVal = arr[idx]

    for (let i = idx; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }

    arr[arr.length - 1] = movedVal
}

export function moveElementToEnd(array: number[], toMove: number) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] === toMove) shift(array, j)
    }

    return array
}

// Second approach: solved in linear time
export function moveElementToEndLinear(array: number[], toMove: number) {
    let i = 0
    let j = array.length - 1

    while (i <= j) {
        let head = array[i]
        let tail = array[j]

        if (head === toMove && tail === toMove) {
            j--
            continue
        }

        if (head !== toMove && tail === toMove) {
            i++
            j--
            continue
        }

        if (head !== toMove && tail !== toMove) {
            i++
            continue
        }

        const buffer = array[i]
        array[i] = array[j]
        array[j] = buffer
        i++
        j--
    }

    return array
}
