class BST {
    value: number
    left: BST | null
    right: BST | null

    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const inOrderTraversal = (tree: BST, cb: (value: number) => void): void => {
    if (tree.value) {
        cb(tree.value)

        if (tree.left) {
            inOrderTraversal(tree.left, cb)
        }

        if (tree.right) {
            inOrderTraversal(tree.right, cb)
        }
    }
}

export function findClosestValueInBst(tree: BST, target: number) {
    let closest = tree.value
    let diff = Math.abs(tree.value - target)

    const recalculateClosest = (value: number) => {
        const newDiff = Math.abs(value - target)

        if (newDiff < diff) {
            closest = value
            diff = newDiff
        }
    }

    inOrderTraversal(tree, recalculateClosest)

    return closest
}
