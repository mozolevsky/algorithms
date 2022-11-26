
// [1, 0, 1, 1 ....]
// return max length of 1

const array = [0, 1, 1,1, 0, 0, 1,1, 1, 1];

function maxOne(arr) {
    let currentCounter = 0;
    let maxCounter = 0;

    // arr.forEach((number) => {
    //     if (number) {
    //         currentCounter++;
    //     } else {
    //         currentCounter = 0;
    //     }

    //     // maxCounter = Math.max(currentCounter, maxCounter)

    //     if (currentCounter > maxCounter) {
    //         maxCounter = currentCounter;
    //     }

    // })

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]

        if (num) {
            currentCounter++;
        } else {
            currentCounter = 0;
        }

        if (currentCounter > maxCounter) {
            maxCounter = currentCounter;
        }
    }

    return maxCounter;
}

console.log(maxOne(array))
