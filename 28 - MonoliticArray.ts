const getMode = (arr: number[]): 'inc' | 'dec' => {
    let firstNonEqualValueIdx = 1

    while (arr[0] === arr[firstNonEqualValueIdx]) {
        firstNonEqualValueIdx++
    }

    return arr[0] < arr[firstNonEqualValueIdx] ? 'inc' : 'dec'
}

export function isMonotonic(array: number[]) {
    if (array.length <= 1) return true
    let result = true

    let mode = getMode(array)

    for (let i = 0; i < array.length - 1; i++) {
        const current = array[i]
        const next = array[i + 1]

        if (mode === 'inc' && next < current) {
            result = false
            break
        }

        if (mode === 'dec' && next > current) {
            result = false
            break
        }
    }

    return result
}
