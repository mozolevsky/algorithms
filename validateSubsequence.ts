export function isValidSubsequence(array: number[], sequence: number[]) {
    let result = false

    for (let i = 0; i < array.length; i++) {
        const current = array[i]

        if (sequence[0] === current) {
            sequence.shift()

            if (sequence.length === 0) {
                result = true
                break
            }
        }
    }

    return result
}
