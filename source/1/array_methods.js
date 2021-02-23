// const zero = 0;
// const positiveNumbers = [1, 2, 3];
// const negativeNumbers = [-3, -2, -1];
// const numbers = negativeNumbers.concat(zero, positiveNumbers);

// console.log(numbers);

// 1

const isEven = function(x) {
    console.log('x', x);
    return (x % 2 == 0) ? true : false;
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

// numbers.every(isEven);
// numbers.some(isEven);
// numbers.forEach(function(x) {
//     console.log(x % 2 == 0);
// })
// const myMap = numbers.map(isEven);
// console.log(myMap);
// const evenNumbers = numbers.filter(isEven)
// const evenNumbers = numbers.filter(x => x % 2 == 0);
// console.log(evenNumbers)
// const res = numbers.reduce(function(previous, current, index) {
//     return previous + current;
// });
// console.log('res', res);
// for (let n of numbers) {
//     console.log((n % 2 == 0) ? 'even' : 'odd')
// }

// let iterator = numbers[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// let aEntries = numbers.entries();
// console.log(aEntries.next().value)
// console.log(aEntries.next().value)
// console.log(aEntries.next().value)

// let aKeys = numbers.keys();
// console.log(aKeys.next())
// console.log(aKeys.next())
// console.log(aKeys.next())

// let aValues = numbers.values();
// console.log(aValues.next())
// console.log(aValues.next())
// console.log(aValues.next())

// let numbersCopy1 = Array.from(numbers);
// console.log(numbersCopy1)

// let evens = Array.from(numbers, x => (x % 2 == 0))
// console.log(evens)

// let numbers3 = Array.of(1)
// console.log(numbers3)
// let numbers4 = Array.of(1,2,3,4,5,6)
// console.log(numbers4)
// let numbersCopy = Array.of(...numbers4)
// console.log(numbersCopy)

// let numCopy = Array.of(1, 2, 3, 4, 5, 6);
// numCopy.fill(0)
// numCopy.fill(2, 1)
// numCopy.fill(1, 3, 5)
// console.log(numCopy)

// let ones = Array(6).fill(1);
// console.log(ones)

// 65 Page https://github.com/amilajack/reading/blob/master/JavaScript/Learning%20Javascript%20Data%20Structures%20and%20Algorithms.pdf

let copyArray = [1, 2, 3, 4, 5, 6]
// copyArray.copyWithin(0, 3)

// console.log(copyArray.copyWithin(0, 3)
console.log(copyArray.copyWithin(1, 3, 5))