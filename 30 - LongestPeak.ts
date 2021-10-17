export function longestPeak(array: number[]) {
    let longestPeak = 0

    for (let i = 0; i < array.length; i++) {
        const curr = array[i]
        const next = array[i + 1]
        const prev = array[i - 1]

        // peak
        if (curr > prev && curr > next) {
            let j = i
            let q = i

            // find a left edge
            while (array[j] > array[j - 1]) {
                j--
            }

            // find a right edge
            while (array[q] > array[q + 1]) {
                q++
            }

            const peakLong = q - j + 1
            longestPeak = peakLong > longestPeak ? peakLong : longestPeak
        }
    }

    return longestPeak
}
