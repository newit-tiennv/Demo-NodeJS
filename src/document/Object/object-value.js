/**
 * Trả về 1 array với các giá trị của object.
 */

const objV = { name: "Kia", age: 123, gender: 'female' };
const objV1 = { a: 1, b: 2, c: undefined };
const result = Object.values(objV);
const result1 = Object.values(objV1);
console.log(result); //[ 'Kia', 123, 'female' ]
console.log(result1); //[ 1, 2, undefined ]