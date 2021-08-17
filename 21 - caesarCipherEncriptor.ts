export function caesarCipherEncryptor(string: string, key: number) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const lastAlphabetIdx = alphabet.length - 1
    const shiftedLetters = []

    while (key > lastAlphabetIdx) {
        key = key - alphabet.length
    }

    for (let letter of string.split('')) {
        for (let i = 0; i < alphabet.length; i++) {
            if (letter === alphabet[i]) {
                const shiftedIdx =
                    i + key > lastAlphabetIdx
                        ? i + key - alphabet.length
                        : i + key

                shiftedLetters.push(alphabet[shiftedIdx])
            }
        }
    }

    return shiftedLetters.join('')
}
