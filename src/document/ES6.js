/**
 * Default value
 */

const myFunction = (name, age = 19) => `My name is ${name}, ${age} years old.`;
console.log("Ex1: ", myFunction("Tien")); //My name is Tien, 19 years old.
console.log("Ex2: ", myFunction("Tien", 21)) // My name is Tien, 21 years old.


/**
 * Array and object destructing
 */

const info = {
    name: 'ABC',
    age: 12,
    gender: 'male'
}

let { name, age, gender } = info;
console.log(name);
console.log(age);
console.log(gender);

// Đổi tên biến
let {name: username} = info;
console.log(username)

// With array
const info2 = ["DEF", 13, 'Female'];
let [v1, v2, v3] = info2;
console.log(v1);
console.log(v2);
console.log(v3);

/**
 * Import
 */
import ABC from './string';
// const ABC = require('./string');
console.log(ABC("Jon", 21)); //ERROR