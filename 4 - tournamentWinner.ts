export function tournamentWinner(competitions: string[][], results: number[]) {
    const scoreTable: Record<string, number> = {}

    competitions.forEach((item: string[], idx: number) => {
        const result = results[idx]

        const homeTeam = item[0]
        const awayTeam = item[1]

        const roundWinner = result ? homeTeam : awayTeam

        if (scoreTable[roundWinner]) {
            scoreTable[roundWinner] += 3
        } else {
            scoreTable[roundWinner] = 3
        }
    })

    let winner = {
        teamTitle: '',
        score: 0
    }
    Object.keys(scoreTable).forEach((teamTitle) => {
        const currentTeamScore = scoreTable[teamTitle]

        if (currentTeamScore > winner.score) {
            winner = { teamTitle, score: currentTeamScore }
        }
    })

    return winner.teamTitle
}
