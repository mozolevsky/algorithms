export function runLengthEncoding(string: string) {
    let result = ''
    let counter = 1

    for (let i = 0; i < string.length; i++) {
        const current = string[i]
        const next = string[i + 1]

        if (current === next && counter < 9) {
            counter++
            continue
        }

        result += counter + current
        counter = 1
    }

    return result
}
