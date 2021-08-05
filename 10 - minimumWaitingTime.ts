export function minimumWaitingTime(queries: number[]): number {
    const sortedQueries = queries.sort((a, b) => a - b)
    let result = 0
    let middleSum = 0

    for (let i = 0; i < sortedQueries.length; i++) {
        middleSum = i > 0 ? middleSum + sortedQueries[i - 1] : 0

        result += middleSum
    }

    return result
}
