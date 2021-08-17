export function isPalindrome(string: string) {
    if (string.length === 1) return true

    const middle = ~~(string.length / 2)

    for (let head = 0; head <= middle; head++) {
        const tail = string.length - 1 - head

        if (string[head] !== string[tail]) return false
    }

    return true
}
