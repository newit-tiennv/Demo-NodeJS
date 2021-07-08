/**
 * Trả về các mảng giá trị với cặp key - value.
 */

const objDef = { name: "John", gender: 'male', age: 99};
const result = Object.entries(objDef);
console.log(result); //[ [ 'name', 'John' ], [ 'gender', 'male' ], [ 'age', 99 ] ]