type SpecialArray = Array<number | SpecialArray>

export function productSum(array: SpecialArray) {
    const calculateLevelSum = (arr: SpecialArray, level = 1) => {
        let sum = 0

        for (let item of arr) {
            if (Array.isArray(item)) {
                sum = sum + calculateLevelSum(item, level + 1)
            } else {
                sum += item
            }
        }

        return sum * level
    }

    return calculateLevelSum(array)
}
