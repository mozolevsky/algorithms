export function arrayOfProducts(array: number[]) {
    const productArr = Array(array.length).fill(1)

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < productArr.length; j++) {
            if (i === j) {
                continue
            }

            productArr[j] = productArr[j] * array[i]
        }
    }

    return productArr
}
