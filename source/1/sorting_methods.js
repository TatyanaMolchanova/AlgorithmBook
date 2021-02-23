const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
numbers.reverse();
// if a negative value is returned, it implies that a is smaller than b and this is used for sorting
numbers.sort(function(a, b) {
    return a - b;
});
// console.log(numbers);

let friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Cris', age: 25}
]

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}

// console.log(friends.sort(comparePerson));

// Page 67 https://github.com/amilajack/reading/blob/master/JavaScript/Learning%20Javascript%20Data%20Structures%20and%20Algorithms.pdf


const names = ['Ana', 'ana', 'john', 'John']
console.log('names.sort()', names.sort());

names.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1
    } 
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1
    }
    return 0;
})

// names.sort((a, b) => a.toLowerCase() - b.toLowerCase()); // not working

// console.log('names', names)
