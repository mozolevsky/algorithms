export function sortedSquaredArray(array: number[]) {
    const compareFn = (a: number, b: number) => {
  if (a - b > 0) return 1
  if (a - b < 0) return -1
  
  return 0
}
  
return array.map(v => v**2).sort(compareFn)
}
