export function firstDuplicateValue(array: number[]) {
    const map: Record<number, number> = {}
    let result = -1

    array.every(v => {
        if (map[v]) {
            result = map[v]
            return false
        }

        map[v] = v
        return true
    })

    return result
}
