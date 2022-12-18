// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

const arr = [17,18,5,4,6,1];

function replaceElements(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        let nextMax =  0;
        
       for (let j = i + 1; j < arr.length; j++) {
        const el = arr[j];

        if (el > nextMax) {
            nextMax = el;
        }
        
       }

        arr[i] = nextMax;

        if (i === arr.length - 1) {
            arr[i] = -1;
        }
    }


    return arr;
};


// Output [18,6,6,6,1,-1]

console.log(replaceElements(arr))
