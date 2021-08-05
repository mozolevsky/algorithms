export function classPhotos(
    redShirtHeights: number[],
    blueShirtHeights: number[]
) {
    const sortedRedGroup = redShirtHeights.sort((a, b) => a - b)
    const sortedBlueGroup = blueShirtHeights.sort((a, b) => a - b)

    const checkGroupPhotoPossibility = (...args: number[][]) => {
        const [group1, group2] = args

        return group1.every((elem, idx) => elem > group2[idx])
    }

    const groups =
        sortedRedGroup[0] > sortedBlueGroup[0]
            ? [sortedRedGroup, sortedBlueGroup]
            : [sortedBlueGroup, sortedRedGroup]

    return checkGroupPhotoPossibility(...groups)
}
