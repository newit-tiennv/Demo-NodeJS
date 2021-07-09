/**
 * Kiểm tra object có khoá hay không.
 */

const objIf = { a: 1, b: 2, c: 3 };
const result = Object.isFrozen(objIf);
console.log(result); //false

Object.freeze(objIf);
const result1 = Object.isFrozen(objIf);
console.log(result1);//true