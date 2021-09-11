export function spiralTraverse(array: number[][]): number[] {
    const result: number[] = []
    let direction: 'right' | 'bottom' | 'left' | 'top' = 'right'

    while (array.length) {
        if (direction === 'right') {
            for (let i = 0; i < array[0].length; i++) {
                result.push(array[0][i])
            }
            array.shift()
            direction = 'bottom'
            continue
        }

        if (direction === 'bottom') {
            for (let i = 0; i < array.length; i++) {
                const lastInnerArrElem = array[i].pop()

                if (lastInnerArrElem !== undefined) {
                    result.push(lastInnerArrElem!)
                }
            }

            direction = 'left'
            continue
        }

        if (direction === 'left') {
            for (let i = array[0].length - 1; i >= 0; i--) {
                result.push(array[array.length - 1][i])
            }
            array.pop()
            direction = 'top'
            continue
        }

        if (direction === 'top') {
            for (let i = array.length - 1; i >= 0; i--) {
                const firstInnerArrElem = array[i].shift()

                if (firstInnerArrElem !== undefined) {
                    result.push(firstInnerArrElem!)
                }
            }

            direction = 'right'
            continue
        }
    }

    return result
}
