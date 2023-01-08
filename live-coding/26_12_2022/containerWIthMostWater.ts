// @ts-nocheck

/**
 * 
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 */

const height = [1,8,6,2,5,4,8,3,7]; // 49

const height2 = [2,3,10,5,7,8,9]; // 36


function maxArea(height: number[]): number {
    let maxArea = 0;

    let map = {}
    height.forEach((h, idx) => {
        if (map[h] !== undefined) {
            map[h].push(idx)
        } else {
            map[h] = [idx]
        }
    })

    const orderedHeight = height.sort((a, b) => b - a)

    for (let i = 0; i < orderedHeight.length; i++) {
        const elem = orderedHeight[i];
        const next = orderedHeight[i + 1]
        
        if (next) {
            // equal elements
            if (next - elem === 0) {
                const height = elem;
                // back to case with > 2 equal elements
                const indexes = map[elem]
                const length = Math.max(...indexes) - Math.min(...indexes)

                const square = height * length
                maxArea = square > maxArea ? square : maxArea
            } else {
                const height = next;
                const length = Math.max(map[elem][0], map[next][0]) - Math.min(map[elem][0], map[next][0])

                const square = height * length
                maxArea = square > maxArea ? square : maxArea
            }
        }
    }


    return maxArea;
};
