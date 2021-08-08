// first variant
export function getNthFib(n: number) {
    let prev = 0
    let current = 1
    let next
    let fibonacci = [0]

    for (let i = 1; i < n; i++) {
        next = prev + current
        fibonacci.push(current)
        prev = current
        current = next
    }

    return fibonacci[n - 1]
}

// second variant
export function getNthFib2(n: number): number {
    if (n === 1) return 0
    if (n === 2) return 1

    return getNthFib(n - 1) + getNthFib(n - 2)
}
