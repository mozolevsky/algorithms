export function tandemBicycle(
    redShirtSpeeds: number[],
    blueShirtSpeeds: number[],
    fastest: boolean
) {
    const sortedGroup1 = redShirtSpeeds.sort((a, b) =>
        fastest ? b - a : a - b
    )
    const sortedGroup2 = blueShirtSpeeds.sort((a, b) => a - b)

    let speedSum = 0
    for (let i = 0; i < sortedGroup1.length; i++) {
        const current1 = sortedGroup1[i]
        const current2 = sortedGroup2[i]

        speedSum += current1 >= current2 ? current1 : current2
    }

    return speedSum
}
