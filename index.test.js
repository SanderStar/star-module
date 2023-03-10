const greeter = require('./index.js');

console.log('Starting tests');

const resOne = greeter();
if (resOne !== 'Hello, User!') {
    throw new Error('greeter not working with default argument');
}

const resTwo = greeter('Sander');
if (resTwo !== 'Hello, Sander!') {
    throw new Error('greeter not working with name argument');
}