var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log('myVariable', myVariable)
console.log('myFunction', myFunction())
console.log('2 myVariable', myVariable)

console.log('myOtherVariable', myOtherVariable)
console.log('myOtherFunction', myOtherFunction())
console.log('2 myOtherVariable', myOtherVariable)

// PAGE 46 first More Pages is read 
// https://github.com/amilajack/reading/blob/master/JavaScript/Learning%20Javascript%20Data%20Structures%20and%20Algorithms.pdf
// https://github.com/amilajack/reading/tree/master/JavaScript