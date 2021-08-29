const getDiff = (a: number, b: number) => {
  // a > 0 && b > 0
  // a < 0 && b < 0
  if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    return a > b ? a - b : b - a;
  }

  // a > 0 && b < 0
  // a < 0 && b > 0
  return a > b ? a - b : b - a;
};

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  const arr1Sorted = arrayOne.sort((a, b) => a - b);
  const arr2Sorted = arrayTwo.sort((a, b) => a - b);

  let pointer1 = 0;
  let pointer2 = 0;

  let minDiff = getDiff(arr1Sorted[0], arr2Sorted[0]);
  let closestPair = [arr1Sorted[0], arr2Sorted[0]];

  while (pointer1 < arr1Sorted.length && pointer2 < arr2Sorted.length) {
    const curr1 = arr1Sorted[pointer1];
    const curr2 = arr2Sorted[pointer2];
    const newDiff = getDiff(curr1, curr2);

    if (newDiff === 0) {
      closestPair = [curr1, curr2]
       break 
    }

    if (newDiff < minDiff) {
      closestPair = [curr1, curr2];
      minDiff = newDiff;
    }

    if (curr1 < curr2) {
      pointer1++;
    } else {
      pointer2++;
    }
  }

  return closestPair;
}

