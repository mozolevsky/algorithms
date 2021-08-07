export class LinkedList {
    value: number
    next: LinkedList | null

    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
    let cursor = linkedList

    while (cursor) {
        if (cursor.next && cursor.value === cursor.next.value) {
            cursor.next = cursor.next.next
        } else {
            cursor = cursor.next as LinkedList
        }
    }

    return linkedList
}
