// fibonacci
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
    // console.log(fibonacci[i]);
}

///// insert element on first position

const numbers = [1,2,3,4,5,6,7,8,9,10]

for (var i = numbers.length; i >= 0; i--) {
    // console.log('0 numbers[i]',  numbers[i])
    numbers[i] = numbers[i - 1]
    // console.log('1 ',  numbers[i])
    // console.log('numbers[i] = numbers[i - 1] ',  numbers[i] = numbers[i - 1])
    // console.log('1 -1 ',  numbers[i -1])
}
// console.log('numbers[0]',  numbers[0])
numbers[0] = -1;

numbers.unshift(-4, -3, -2);
numbers.pop();

// console.log('numbers', numbers);

// removing an element from first position

// for (let i = 0; i < numbers.length - 1; i++) {
//     numbers[i] = numbers[i + 1]
// }

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1]
}

numbers.shift();

numbers.splice(5, 3) //remove from 5 index 3 items - remove index 5,6,7

delete numbers[0]

numbers.splice(5, 0, 4, 5, 6) // insert after 5 index -  0 deleted - added - 4,5,6

numbers.splice(5, 3, 2,3,4) // remove 3 items from 5 index and add then 2,3,4

console.log('numbers', numbers);

// 53 page https://github.com/amilajack/reading/blob/master/JavaScript/Learning%20Javascript%20Data%20Structures%20and%20Algorithms.pdf