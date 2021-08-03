export function nodeDepths(root: BinaryTree) {
    let depthSum = 0
    /**
     * As soon as we will go through BT, we'll get 0 level of depth
     */
    let level = -1

    const traverse = (tree: BinaryTree, level: number) => {
        const { value, left, right } = tree

        if (value !== null && value !== undefined) {
            level++
            console.log(level)
            depthSum += level

            if (left) {
                traverse(left, level)
            }

            if (right) {
                traverse(right, level)
            }

            if (!left && !right) {
                level = 0
            }
        }
    }

    traverse(root, level)

    return depthSum
}

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
