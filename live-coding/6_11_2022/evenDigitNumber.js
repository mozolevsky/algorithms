const arr = [2424, 242, 4, 8763, 3453]; // return 2


function isEven(number) {
    const str = number.toString();
    let strLength = str.length;

    return !(strLength % 2)
}

function evenDigit(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        const currentDigit = array[i];

        if (isEven(currentDigit)) {
            result++
        }
    }

    return result;

}

console.log(evenDigit(arr))
