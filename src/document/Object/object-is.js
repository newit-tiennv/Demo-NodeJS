/**
 * Kiểm tra 2 value of object.
 */

const objI1 = { a: 1, b: 2 };
const objI2 = { a: 1, b: 2 };
const objI3 = { a: '1', b: '2' };
const result = Object.is(objI1.a, objI2.a);
const result1 = Object.is(objI1.a, objI3.a);
console.log(`Result 1: ${result}, Result 2: ${result1}`);