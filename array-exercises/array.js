function findDivisibleBy4(array) {
    return array.reduce((prev, current) => current%4 == 0 ? [...prev, current] : prev, [])
}
// console.log(findDivisibleBy4([1,2,3,4,5,8,12,16]));

function evenNumbers(array) {
    return array.reduce((prev, current) => current%2 == 0 ? [...prev, current] : prev, [])
}
// console.log(evenNumbers([1,2,3,4,5,8,12,16]));

function oddNumbers(array) {
    return array.reduce((prev, current) => current%2 == 1 ? [...prev, current] : prev, [])
}
// console.log(oddNumbers([1,2,3,4,5,8,12,16]));

function sumDivisibleBy4(array) {
    return array.reduce((prev, current) => current%4 == 0 ? prev += current : prev, 0)
}
// console.log(sumDivisibleBy4([1,2,3,4,5,8,12,16]))

function sumEvenNumbers(array) {
    return array.reduce((prev, current) => current%2 == 0 ? prev += current : prev, 0)
}
// console.log(sumEvenNumbers([1,2,3,4,5,8,12,16]))

function sumOddNumbers(array) {
    return array.reduce((prev, current) => current%2 == 1 ? prev += current : prev, 0)
}
// console.log(sumOddNumbers([1,2,3,4,5,8,12,16]));

function uniqueNumbers(array) {
    return array.reduce((prev, current) => {
        prev.findIndex(a => a == current) > -1 ? prev.splice(prev.findIndex(a => a == current)) : [...prev, current];
    }, [])
}

console.log(uniqueNumbers([1,1,2,3,4,5,6,6,7,8,8,88,9]));