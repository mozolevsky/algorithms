export function generateDocument(characters: string, document: string) {
    const charactersMap: Record<string, number> = {}

    for (let char of characters) {
        if (charactersMap[char]) {
            charactersMap[char]++
            continue
        }

        charactersMap[char] = 1
    }

    for (let docChar of document) {
        if (charactersMap[docChar] && charactersMap[docChar] > 0) {
            charactersMap[docChar]--
            continue
        }

        return false
    }

    return true
}
