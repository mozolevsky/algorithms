export function findThreeLargestNumbers(array: number[]) {
    let [min, middle, max] = [array[0], array[1], array[2]].sort(
        (a, b) => a - b
    )

    for (let i = 3; i < array.length; i++) {
        const current = array[i]

        if (current >= min && current < middle) {
            min = current
            continue
        }

        if (current >= middle && current < max) {
            min = middle
            middle = current
            continue
        }

        if (current >= max) {
            min = middle
            middle = max
            max = current
            continue
        }
    }

    return [min, middle, max]
}
