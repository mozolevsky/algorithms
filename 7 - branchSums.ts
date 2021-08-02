class BinaryTree {
    value: number
    left: BinaryTree | null
    right: BinaryTree | null

    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export function branchSums(root: BinaryTree): number[] {
    const branchesSum: number[] = []

    const traverse = (tree: BinaryTree, sum = 0) => {
        const { value, left, right } = tree

        if (value !== null && value !== undefined) {
            sum += value

            if (left) {
                traverse(left, sum)
            }

            if (right) {
                traverse(right, sum)
            }

            if (!left && !right) {
                branchesSum.push(sum)
            }
        }
    }

    traverse(root)

    return branchesSum
}
