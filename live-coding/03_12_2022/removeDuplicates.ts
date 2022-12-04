

const numbers = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates() {
    let uniquePointer = 0;

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        const nextValue = numbers[i + 1];

        if (current !== nextValue) {
            numbers[uniquePointer + 1] = nextValue;
            uniquePointer++;
        }
    }

    numbers.splice(uniquePointer)
}

removeDuplicates();
console.log(numbers)
