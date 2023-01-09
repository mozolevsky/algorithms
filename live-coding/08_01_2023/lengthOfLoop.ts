// @ts-nocheck

class NodeLL{
    data: number
    next: NodeLL | null

    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const n1 = new NodeLL(1)
const n2 = new NodeLL(2)
const n3 = new NodeLL(3)
const n4 = new NodeLL(4)
const n5 = new NodeLL(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n2

const traverse = (node: NodeLL, index, values: {data: number, index: number}[]) => {
    const {data, next} = node
    const nextIndex = index + 1

    // there is no loop
    if (!next) {
        return 0
    }

    const duplicate = values.find(v => v.data === data)
   
    // here is loop -> return count of nodes in loop
    if (duplicate) {
        const duplicateIndex = duplicate.index

        return nextIndex - duplicateIndex
    }

   // work with another node
    node = node.next!
    values.push({
        data,
        index: nextIndex
    })


   return traverse(node, nextIndex, values)
}

class Solution {
    //Function to find the length of a loop in the linked list.
    countNodesinLoop(head: NodeLL)
    {
        return traverse(head, 0, [])
    }
    
}

const solution = new Solution()
console.log(solution.countNodesinLoop(n1))
