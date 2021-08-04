export class Node {
    name: string
    children: Node[]

    constructor(name: string) {
        this.name = name
        this.children = []
    }

    addChild(name: string) {
        this.children.push(new Node(name))
        return this
    }

    depthFirstSearch(array: string[]) {
        array.push(this.name)

        const traverse = (children: Node[]) => {
            children.forEach((childNode) => {
                const { name, children: innerChildren } = childNode
                array.push(name)
                traverse(innerChildren)
            })
        }

        traverse(this.children)

        return array
    }
}
