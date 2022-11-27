// https://leetcode.com/problems/subrectangle-queries/


class SubrectangleQueries {
    rect: number[][];

    constructor(rectangle: number[][]) {
        this.rect = rectangle;
    }

    updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
        
        for (let i = 0; i < this.rect.length; i++) {
            const innerRect = this.rect[i]

            for (let j = 0; j < innerRect.length; j++) {

                if (i >= row1 && i <= row2) {
                    if (j >= col1 && j <= col2) {
                        this.rect[i][j] = newValue;
                    }
                }

            }
        }
    }

    getValue(row: number, col: number): number {
        return this.rect[row][col];
    }
}

const rectangle = [
    [1,2,1],
    [4,3,4],
    [3,2,1],
    [1,1,1]
]


const obj = new SubrectangleQueries(rectangle)

obj.updateSubrectangle(0, 0, 2, 2, 5)
const param_2 = obj.getValue(1, 1)

