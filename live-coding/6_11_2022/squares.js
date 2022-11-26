const arr = [-8, -4, -2, 1, 3, 5, 7];


// sorted array
// return sorted array of squares

function sortedSquares(arr) {
    const newArr = []

    // 1. all positive
    // 2. all negative [! not working]
    if ((arr[0] > 0) || (arr[arr.length - 1] < 0)) {
        return arr.map(v => Math.pow(v))
    }

    // 3. part of array are negative numbers
    const head = arr[0];
    const tail = arr[arr.length - 1];

    while(head !== tail) {
        if (Math.pow(head, 2) > Math.pow(tail, 2)) {

        }
    }

}

console.log(sortedSquares(arr))
