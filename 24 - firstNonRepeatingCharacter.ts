export function firstNonRepeatingCharacter(string: string) {
    const charsMap: Record<string, { count: number; idx: number }> = {}

    for (let i = 0; i < string.length; i++) {
        const char = string[i]

        if (charsMap[char]) {
            charsMap[char].count++
            continue
        }

        charsMap[char] = {
            count: 1,
            idx: i
        }
    }

    const nonRepeatedCharKey = Object.keys(charsMap).find(
        (charKey) => charsMap[charKey].count === 1
    )

    return nonRepeatedCharKey ? charsMap[nonRepeatedCharKey].idx : -1
}
